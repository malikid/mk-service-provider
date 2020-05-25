import bootstrap from './bootstrap';
import * as database from './database';

module.exports = async (app) => {
  await bootstrap(app);
  await database.init();
};
