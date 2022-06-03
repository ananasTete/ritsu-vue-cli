/**
 * 封装自定义指令的行为中执行终端命令相关代码
 */

const { spawn } = require("child_process");

const commandSpawn = (...argu) => {
  return new Promise((resolve) => {
    const childProcess = spawn(...argu); //创建子进程执行传入的命令，并返回子进程对象
    childProcess.stdout.pipe(process.stdout); //子进程执行命令过程中输出流会有过程信息，将信息传给主进程显示
    childProcess.stderr.pipe(process.stderr); //将报错信息也传到主进程
    childProcess.on("close", () => {
      resolve(); //命令执行完毕后，返回成功状态的Promise对象
    });
  });
};

module.exports = {
  commandSpawn,
};
