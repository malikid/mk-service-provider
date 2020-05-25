import {isArray, reduce, forEach} from 'lodash';

export const skills = [
  'Frontend',
  'Backend',
  'Data',
  'Communication',
  'Project Management',
  'Product Management',
  'Mandarin',
  'Basketball',
  'Catsitting',
  'Badminton'
];

class Role {
  skill;
  minLevel;

  constructor(skill, minLevel) {
    this.skill = skill;
    this.minLevel = minLevel;
  }
};

class Request {
  roles;
  detail;

  constructor(roles, detail) {
    if(!isArray(roles)) {
      roles = [roles];
    }
    this.roles = roles;
    this.detail = detail;
  }
};

// Concept
const requests = [
  new Request([
    new Role('Backend', 3),
  ], 'As a frontend developer, I would like to access courses data via APIs.'),
  new Request([
    new Role('Backend', 4),
    new Role('Frontend', 4),
    new Role('Project Management', 3),
    new Role('Product Management', 4),
  ], 'As a founder, I would like to provide an EC platform for the audience.'),
  new Request([
    new Role('Basketball', 2),
    new Role('Badminton', 2),
    new Role('Catsitting', 2),
  ], 'As an HR, I would like to arrange a fun party.'),
  new Request([
    new Role('Communication', 4),
    new Role('Mandarin', 3),
  ], 'As a client, I would like to have a Mandarin speaking contact person when running into issues.'),
  new Request([
    new Role('Product Management', 4),
  ], 'As a developer, I would like to have the epic prioritizing, story mapping and design ready before the development.'),
  new Request([
    new Role('Communication', 3),
  ], 'As a customer success, I would like to know more about what information are necessary when reporting an issue.'),
  new Request([
    new Role('Frontend', 2),
  ], 'As a client, I would like to have the UI issue fixed.'),
  new Request([
    new Role('Catsitting', 4),
    new Role('Communication', 1),
  ], 'As an owner of a cat, I am looking for someone to take care of my lovely cat.'),
  new Request([
    new Role('Data', 4),
  ], 'As a founder, I would like to know how much our clients and users adopt our service.'),
  new Request([
    new Role('Basketball', 3),
  ], 'As a sporty person, I would like to find a sport buddy after work.'),
  new Request([
    new Role('Badminton', 3),
  ], 'As a great badminton player, I would like to team up with someone to participate competitions.'),
  new Request([
    new Role('Mandarin', 5),
  ], 'As a user, I would like to have the Mandarin interface on the platform.'),
  new Request([
    new Role('Data', 3),
    new Role('Project Management', 4),
    new Role('Communication', 3),
  ], 'As a product owner, I would like someone to lead a team to deliver the MVP of an analytics system.'),
];

// Transform to be better accessed and searched from database
// Use the combination of skills as keys
export const requestsForStoring = reduce(requests, (result, request) => {
  const {roles, detail} = request;
  forEach(roles, role => {
    const {skill, minLevel} = role;
    const skillKey = skill.replace(' ', '');
    if(result[skillKey]) {
      result[skillKey].push({minLevel, detail});
    } else {
      result[skillKey] = [{minLevel, detail}];
    }
  });
  return result;
}, {});
