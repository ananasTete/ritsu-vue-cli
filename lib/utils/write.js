/**
 * 封装创建一个文件并将编译结果写入的函数
 */
const fs = require('fs')

function writeToFile(path, content) {
  return fs.promises.writeFile(path, content)  //返回一个promise实例
}
//将内容content写入到path路径的文件中

module.exports = {
  writeToFile
}