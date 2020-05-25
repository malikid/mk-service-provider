import {map, random, isEmpty} from 'lodash';
import moment from 'moment';

const entity = 'Requests';
const dateFormat = 'MMM Do';
const totalDays = 19;

const initStatus = () => ({
  unavailableBy: {},
  selected: false,
  declined: false,
});

export const getFiveRequestsFromSkillSet = async skills => {
  const requestsWithoutDates = await getRequestsFromSkillSet(skills);
  const requests = map(requestsWithoutDates, request => ({
    ...request,
    ...generateFakeStartAndEndDates(),
    ...initStatus()
  }));
  const requestLength = requests.length;
  for(let i = requestLength; i > 5; i--) {
    requests.splice(random(i - 1), 1);
  }
  return requests;
}

export const getRequestsFromSkillSet = async skills => {
  let requests = [];
  for(let i = 0; i < skills.length; i++) {
    const {name: skillName, level} = skills[i];
    const skillAsKey = skillName.replace(' ', '');
    const results = await DbService.readByIdEndAt(entity, skillAsKey, 'minLevel', level);
    if (isEmpty(results)) {
      continue;
    }
    requests.push(...map(results, result => ({...result, skill: skillName})));
  }
  return requests;
};

export const generateFakeStartAndEndDates = () => {
  // In two weeks, 1 - 5 days in total
  let now = moment();
  const startInDaysFromNow = random(1, 14);
  const before = Math.floor(startInDaysFromNow / totalDays * 10);
  const endInDaysFromStartDate = random(1, 5);
  const during = Math.ceil(endInDaysFromStartDate / totalDays * 10);
  const after = 10 - before - during;

  return {
    startDate: now.add(startInDaysFromNow, 'days').format(dateFormat),
    endDate: now.add(endInDaysFromStartDate, 'days').format(dateFormat),
    timelineRatio : {
      before,
      during,
      after
    }
  };
};
