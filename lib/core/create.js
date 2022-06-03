/** 封装自定义指令,会自动添加到选项说明中去 */

const program = require("commander");

const { createActions, addcompAction } = require("./actions");

function createCommonds() {
  program //定义create指令
    .command("create <projectName>")
    .description("clone a repository into a folder")
    .action(createActions); //action方法接受一个函数，执行指令时自动回调，projectName会自动成为回调函数的参数

  program //定义addcomp指令
    .command("addcomp <compName>")
    .description(
      "add a vue component,such as ritsu addcomp HelloWorld  -d src/components"
    )
    .action((compName) => {
      addcompAction(compName, program.dest || "src/components");
      //当命令中出现 -d ‘路径’ 时，路径会自动保存在program的dest属性中，如果没有传入路径则会应用设置的默认路径
    });
}

module.exports = createCommonds;
