import {expect} from 'chai';
import forEach from 'lodash/forEach';
import {Database} from 'Config/database';
import {skills, requestsForStoring} from 'Config/seedData';

describe('Database', () => {
  let db;

  before((done) => {
    db = new Database();
    done();
  });

  it('CRUD', async () => {
    const originalData = {
      Test: {
        123: 'Test Content'
      }
    };
    const newData = {
      Test: {
        234: 'Test Content 2'
      }
    };

    await db.create(originalData);
    let data = await db.read();
    expect(data).to.have.property('Test');
    expect(data.Test).to.have.property('123', originalData.Test['123']);

    await db.update(newData);
    data = await db.read();
    expect(data).to.have.property('Test');
    const testEntity = data.Test;
    expect(testEntity).to.not.have.property('123', originalData.Test['123']);
    expect(testEntity).to.have.property('234', newData.Test['234']);
    
    await db.remove();
    data = await db.read('Test');
    expect(data).to.be.null;
  });

  it('CRUD by entity', async () => {
    const entity = 'Test';
    const originalData = {
      123: 'Test Content'
    };
    const newData = {
      123: 'Test Content 2'
    };

    await db.createByEntity(entity, originalData);
    let data = await db.readByEntity(entity);
    expect(data).to.have.property('123', originalData['123']);

    await db.updateByEntity('Test', newData);
    data = await db.readByEntity(entity);
    expect(data).to.not.have.property('123', originalData['123']);
    expect(data).to.have.property('123', newData['123']);
    
    await db.removeByEntity('Test');
    data = await db.readByEntity(entity);
    expect(data).to.be.null;
  });

  it('CRUD by id', async () => {
    const entity = 'Test';
    const id = 1;
    const originalData = {name: 'abc'};
    const newData = {name: 'abcd'};

    await db.createById(entity, id, originalData);
    let data = await db.readById(entity, id);
    expect(data).to.have.property('name', originalData.name);

    await db.updateById(entity, id, newData);
    data = await db.readById(entity, id);
    expect(data).to.have.property('name', newData.name);
    
    await db.removeById(entity, id);
    data = await db.readById(entity, id);
    expect(data).to.be.null;
  });

  describe.skip('Set SeedData', () => {
    it('Set skills data', async () => {
      await db.createByEntity('Skills', skills);
    });

    it('Set requests data', async function() {
      this.timeout(6000);
      const keys = Object.keys(requestsForStoring);
      for(let i = 0; i < keys.length; i++) {
        const requests = requestsForStoring[keys[i]];
        const skill = keys[i];
        console.log({skill, requests});
        for(let j = 0; j < requests.length; j++) {
          await db.createWithoutId(`Requests/${skill}`, requests[j]);
        }
      }
    });
  });
});
