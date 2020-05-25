import forEach from 'lodash/forEach';

const getFiles = (function () {
  let getFilename, isJs, nodeFs, nodePath;
  nodePath = require('path');
  nodeFs = require('fs');

  getFilename = (path, extname) => {
    let filename;
    extname = nodePath.extname(path);
    filename = nodePath.basename(path, extname);
    return [filename, extname];
  };

  isJs = (extendName) => extendName === '.js';

  return async function (path, cb) {
    let extendName, filename, filenameArray;
    if (typeof path !== 'string' || !path) {
      return null;
    }
    if (!nodeFs.existsSync(path)) {
      console.error('require path not exists: ', path);
      return null;
    }
    filenameArray = getFilename(path);
    filename = filenameArray[0];
    extendName = filenameArray[1];
    if (nodeFs.lstatSync(path).isFile()) {
      if (!isJs(extendName)) {
        return null;
      }
      return {path, filename};
    }
    let files = null;
    if (nodeFs.lstatSync(path).isDirectory()) {
      const filenames = await nodeFs.readdirSync(path);
      files = [];
      forEach(filenames, async (filename) => {
        let fullPath, stat;
        fullPath = nodePath.resolve(path + '/' + filename);
        filenameArray = await getFilename(fullPath);
        filename = filenameArray[0];
        extendName = filenameArray[1];
        stat = nodeFs.lstatSync(fullPath);
        if (stat === void 0) {
          return true;
        }
        if (!isJs(extendName)) {
          return true;
        }
        files.push({path: fullPath, filename});
      });
    }
    return files;
  };
})();

export default {getFiles};
