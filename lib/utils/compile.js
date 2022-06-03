/**
 * 封装编译.ejs模板文件的函数
 */

const ejs = require('ejs')
const path = require('path')

function compile(templateName, data) {
  //传入模板名获取模板路径
  const templatePosition = `../templates/${templateName}`
  const templatePath = path.resolve(__dirname, templatePosition)

  //由模板路径渲染ejs模板文件
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, {data}, {}, (err, result) => {  //编译完成回调的函数
      if(err) {
        reject(err);
        return
      }
      resolve(result);
    })
  })
  
}

module.exports = {
  compile
}