import {reduce, forEach, isEmpty, split, toLower, upperFirst} from 'lodash';
import routes from './routes';
import fileUtils from 'Utils/file';

const CONTROLLER_PATH = `${__dirname}/../api/controllers`;
const SERVICE_PATH = `${__dirname}/../api/services`;

export default async (app) => {
  const getMethodsInFolder = async (PATH) => {
    let files = await fileUtils.getFiles(PATH);
    return reduce(
      files,
      (result, file) => {
        result[file.filename] = require(file.path);
        return result;
      },
      {}
    );
  };

  const setUpRouter = (controllerMethods) => {
    forEach(routes, (value, key) => {
      if (isEmpty(key)) {
        return false;
      }

      if (isEmpty(value)) {
        if (key === '/:controller/:action/:id?') {
          forEach(controllerMethods, (controller, controllerName) => {
            forEach(controller, (action, actionName) => {
              let path = actionName === 'index' ? `/${controllerName}/:id?` : `/${controllerName}/${actionName}/:id?`;
              app.all(path, controllerMethods[controllerName][actionName]);
            });
          });
        }
        return false;
      }

      let params = split(key, ' ', 2);
      let paramsLength = params.length;
      let method;
      let path;

      switch (paramsLength) {
        case 1:
          method = 'all';
          path = params[0];
          break;
        case 2:
          method = toLower(params[0]);
          path = params[1];
          break;
        default:
          return false;
      }

      if (!controllerMethods[value.controller]) {
        console.error(`There's no ${value.controller} controller and ${value.action} action.`);
        return false;
      }

      app[method](path, controllerMethods[value.controller][value.action]);
      delete controllerMethods[value.controller][value.action];
      if (Object.keys(controllerMethods[value.controller]).length === 0) {
        delete controllerMethods[value.controller];
      }
    });
  };

  const setUpGlobalService = (serviceFiles) => {
    forEach(serviceFiles, (serviceFile) => {
      global[`${upperFirst(serviceFile.filename)}Service`] = require(serviceFile.path);
    });
  };

  let controllerMethods = await getMethodsInFolder(CONTROLLER_PATH);
  setUpRouter(controllerMethods);

  let serviceFiles = await fileUtils.getFiles(SERVICE_PATH);
  setUpGlobalService(serviceFiles);
};
