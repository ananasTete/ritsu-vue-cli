/**
 * 封装创建一个文件并将编译结果写入的函数
 */
const fs = require("fs");
const path = require("path");

// 判断路径是否存在不存在就创建的函数
function createDirSync(pathName) {
  // 递归检测路径并创建
  if (fs.existsSync(pathName)) {
    return true;
  } else {
    if (createDirSync(path.dirname(pathName))) {
      //判断其父目录是否存在，存在父目录则创建此目录/文件，不存在继续向上判断
      fs.mkdirSync(pathName);
      return true;
    }
  }
}

// 将内容content写入到path路径的文件中的函数
function writeToFile(path, content) {
  return fs.promises.writeFile(path, content); //返回一个promise实例
}

module.exports = {
  writeToFile,
  createDirSync,
};
