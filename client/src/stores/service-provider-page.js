import {observable, action, computed} from 'mobx';
import axios from 'axios';
import * as moment from 'moment';
import {forEach, reduce} from 'lodash';

import {SERVER_HOST} from 'Config';

class ServiceProvider {
  @observable name;
  @observable age;
  @observable image;
  @observable builtinSkills;
  @observable skills = [];
  @observable requests = [];
  @observable requestsMessage;
  @observable isFetchingRequests = false;

  constructor() {
    this.initSkills();
  }

  @computed
  get isAvailable() {
    return reduce(this.requests, (availabilities, request) => {
      if(Object.keys(request.unavailableBy).length) {
        availabilities[request.id] = false;
      } else {
        availabilities[request.id] = true;
      }
      return availabilities;
    }, {});
  }

  @action
  setName = (value) => {
    this.name = value;
  }

  @action
  setAge = (value) => {
    this.age = value;
  }

  @action
  setImage = (value) => {
    this.image = value;
  }

  @action
  setBuiltInSkills = (skills) => {
    this.builtinSkills = skills;
  }

  @action
  setSkillName = (label, value) => {
    this.skills[label - 1].name = value;
    this.builtinSkills.splice(this.builtinSkills.indexOf(value), 1);
    this.fetchRequests();
  }

  @action
  setSkillLevel = (label, value) => {
    this.skills[label - 1].level = value;
    this.fetchRequests();
  }

  @action
  setRequests = (data) => {
    this.requests = data.result;
    this.requestsMessage = data.message;
  }

  @action
  initSkills = () => {
    for(let i = 0; i < 3; i++) {
      this.skills.push({
        label: i + 1,
        name: '',
        level: 0
      });
    }
  }

  fetchBuiltInSkills = async () => {
    try {
      const response = await axios.get(`${SERVER_HOST}/skills`);
      this.setBuiltInSkills(response.data.result);
    } catch (error) {
      console.error(error);
    }
  }

  areAllSet = () => {
    let result = true;
    forEach(this.skills.slice(), skill => {
      if(!skill.name || !skill.level) {
        result = false;
        return false;
      }
    });
    return result;
  }

  fetchRequests = async () => {
    if(this.isFetchingRequests || !this.areAllSet()) {
      return;
    }
    this.isFetchingRequests = true;
    try {
      const response = await axios.post(`${SERVER_HOST}/requests`, {
        skills: this.skills.slice()
      });
      this.setRequests(response.data);
      this.isFetchingRequests = false;
    } catch (error) {
      console.error(error);
    }
  }

  isOverlap = (requestA, requestB) => {
    const dateFormat = 'MMM Do';
    const {startDate: startA, endDate: endA} = requestA;
    const {startDate: startB, endDate: endB} = requestB;
    const startATimestamp = moment(startA, dateFormat).format('x');
    const endATimestamp = moment(endA, dateFormat).format('x');
    const startBTimestamp = moment(startB, dateFormat).format('x');
    const endBTimestamp = moment(endB, dateFormat).format('x');

    return Math.max(startATimestamp, startBTimestamp) < Math.min(endATimestamp, endBTimestamp);
  }

  makeUnavailableIfAffected = (request, updatedRequest) => {
    if(this.isOverlap(request, updatedRequest)) {
      request.unavailableBy[updatedRequest.id] = 1;
    }
  }

  restoreAvailabilitiesIfAffected = (request, updatedRequest) => {
    if(request.unavailableBy[updatedRequest.id]) {
      delete request.unavailableBy[updatedRequest.id];
    }
  }

  updateTheAvailability = (updatedRequest) => {
    // If the request is unselected, restore the availabilties of those which were affected
    let checkAndUpdateFunction = this.restoreAvailabilitiesIfAffected;
    // If the request is selected, make the overlap ones unavailable
    if(updatedRequest.selected) {
      checkAndUpdateFunction = this.makeUnavailableIfAffected;
    }

    forEach(this.requests, (request) => {
      if(request.id === updatedRequest.id) {
        return true;
      }

      checkAndUpdateFunction(request, updatedRequest);
    });
  }

  @action
  acceptRequest = (request) => {
    request.selected = !request.selected;
    this.updateTheAvailability(request);
  }
  
  @action
  declineReqeust = (request) => {
    request.declined = !request.declined;
  }
};

export default ServiceProvider;
