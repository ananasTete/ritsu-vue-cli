/** 封装定义自定义指令的action */

const { promisify } = require("util");
const download = promisify(require("download-git-repo"));

//默认从download-git-repo拿到的download方法是不支持promise的，通过内置模块
//util中promisify方法将download方法转为一个返回Promsie实例的方法。

const { vueRepo } = require("../config/repo-config");
//将模板项目的地址保存在另一个文件中，为了用户自定义请求的项目地址的功能

const { commandSpawn } = require("../utils/terminal");
const { compile } = require("../utils/compile");
const { writeToFile } = require("../utils/write");
const path = require('path')

//使用async函数定义create指令的行为

async function createActions(projectName) {
  // 1. clone项目目录
  await download(vueRepo, projectName, { clone: true });
  //从指定的仓库中下载项目, (项目地址, 下载到当前目录的哪个目录中)

  // 2. 进入项目目录中执行npm install,安装依赖包
  const command = process.platform === "win32" ? "npm.cmd" : "npm"; //win和mac/linux的npm指令不同，process.platform中保存着当前主机
  await commandSpawn(command, ["install"], { cwd: `./${projectName}` }); //(命令，指令，位置)

  // 3. 运行npm run serve,使安装好的项目自动跑起来
  // commandSpawn(command, ['run', 'serve'], {cwd: `./${projectName}`});

  //这里不使用 await是因为npm run serve开启服务器后会一直运行直到手动关闭，
  //所以在commandSpawn()函数中监听不到close,就不会返回成功状态的Promsie实例
  //程序会阻塞到这一行，所以不使用await。
}

// 定义addcomp指令的行为

async function addcompAction(compName, dest) {
  // 1. 编译.ejs模板文件
  const result = await compile("components.vue.ejs", {
    compName,
    lowerName: compName.toLowerCase(),
  });
  //(要编译的模板名，编译时向模板传递的数据)

  // 2. 创建一个文件并将编译结果写入
  const targetPath = path.resolve(dest, `${compName}.vue`)
  console.log(targetPath);
  writeToFile(targetPath, result);
}

module.exports = {
  createActions,
  addcompAction,
};
