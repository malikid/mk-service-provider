import {expect} from 'chai';
import * as RequestService from 'Services/request';
import {requests} from 'Config/seedData';
import {mockGlobalService} from 'TestUtils/general';

describe('Request Service', () => {
  let mockDbService;

  before((done) => {
    mockDbService = mockGlobalService('DbService', {
      readByIdStartAt: (entity, id, startAtField, startAtValue) => {
        const results = {
          Communication: [{
            detail: 'As a client, I would like to have a Mandarin speaking contact person when running into issues.',
            minLevel: 4
          },
          {
            detail: 'As a customer success, I would like to know more about what information are necessary when reporting an issue.',
            minLevel: 3
          },
          {
            detail: 'As a product owner, I would like someone to lead a team to deliver the MVP of an analytics system.',
            minLevel: 3
          }],
          ProductManagement: [{
            detail: 'As a founder, I would like to provide an EC platform for the audience.',
            minLevel: 4
          },
          {
            detail: 'As a developer, I would like to have the epic prioritizing, story mapping and design ready before the development.',
            minLevel: 4
          }],
          Basketball: []
        };
        return results[id];
      }
    });
    done();
  });

  after((done) => {
    mockDbService.restore();
    done();
  });

  describe('getRequestsFromSkillSet', () => {
    it('Case 1', async () => {
      const skills = [{
        skill: 'Communication',
        level: 3
      }, {
        skill: 'Product Management',
        level: 3
      }, {
        skill: 'Basketball',
        level: 4
      }];
      const requests = await RequestService.getRequestsFromSkillSet(skills);
      expect(requests).to.have.lengthOf(5);
      const firstRequest = requests[0];
      expect(firstRequest).to.have.all.keys('skill', 'minLevel', 'detail');
    })
  });

  it.skip('getFiveRequestsFromSkillSet', async () => {
    const skills = [{
        skill: 'Communication',
        level: 3
      }, {
        skill: 'Product Management',
        level: 3
      }, {
        skill: 'Basketball',
        level: 4
      }];
    await RequestService.getFiveRequestsFromSkillSet(skills);
    // TODO
  })

  describe.skip('generateFakeStartAndEndDates', () => {
    it('Case 1', (done) => {
      const result = RequestService.generateFakeStartAndEndDates();
      console.log({result});
      done();
      // TODO
    });
  });
});
