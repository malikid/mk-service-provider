import * as admin from 'firebase-admin';
import reduce from 'lodash/reduce';

import serviceAccount from "../../service-provider-f24f0-firebase-adminsdk-mxs73-c8f2b83da9.json";

export const init = () => {
  global.DbService = new Database();
};

export class Database {
  client;

  constructor() {
    this.init();
  }

  init = () => {
    const serviceProviderProject = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://service-provider-f24f0.firebaseio.com"
    });

    // serviceProviderProject.auth();
    this.client = serviceProviderProject.database();
  }

  create = (data) => this.client.ref().set(data);

  read = () =>
    this.client.ref()
      .once('value')
      .then((snapshot) => snapshot.val());

  update = (data) =>
    this.client.ref().update(data);

  remove = () =>
    this.client.ref().remove();



  // CRUD by entity
  createByEntity = (entity, data) =>
    this.client.ref(entity).set(data);

  readByEntity = (entity) =>
    this.client.ref(entity)
      .once('value')
      .then((snapshot) => snapshot.val());

  updateByEntity = (entity, data) =>
    this.client.ref(entity).update(data);

  removeByEntity = (entity) =>
    this.client.ref(entity).remove();



  // CRUD by id
  createWithoutId = (entity, data) =>
    // Id is auto-generated
    this.client.ref(`${entity}`).push(data);

  createById = (entity, id, data) =>
    this.client.ref(`${entity}/${id}`).set(data);

  readById = (entity, id) =>
    this.client.ref(`${entity}/${id}`)
      .once('value')
      .then((snapshot) => snapshot.val());

  readByIdEndAt = (entity, id, endAtField, endAtValue) =>
    this.client.ref(`${entity}/${id}`)
      .orderByChild(endAtField)
      .endAt(endAtValue)
      .once('value')
      .then((snapshot) => {
        return reduce(snapshot.val(), (results, item, key) => {
          item && results.push({id: key, ...item});
          return results;
        }, []);
      });

  updateById = (entity, id, data) =>
    this.client.ref(`${entity}/${id}`).update(data);

  removeById = (entity, id) =>
    this.client.ref(`${entity}/${id}`).remove();
};
