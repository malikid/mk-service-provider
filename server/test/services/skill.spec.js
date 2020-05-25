import {expect} from 'chai';
import {mockGlobalService} from 'TestUtils/general';
import * as SkillService from 'Services/skill';
import {skills} from 'Config/seedData';

describe('Skill Service', () => {
  let mockDbService;

  before((done) => {
    mockDbService = mockGlobalService('DbService', {
      readByEntity: () => skills,
    });
    done();
  });

  after((done) => {
    mockDbService.restore();
    done();
  });

  it('getAll', async () => {
    const skillsFromDB = await SkillService.getAll();
    const skillsLength = skills.length;
    expect(skillsFromDB).to.have.lengthOf(skillsLength);
    for(let i = 0; i < skillsLength; i++) {
      expect(skillsFromDB[i]).to.equal(skills[i]);
    }
  });
});
