/** 封装自定义的 -h/--help指令返回的选项说明*/

const program = require('commander');

function helpOptions() {
  program.option('-w --why', 'test');
  program.option('-d --dest <dest>', '例如：-d /src/comps')

  program.on('--help', () => {      
    console.log("");
    console.log("help");
  })
}

module.exports = helpOptions;








//program.option('-w --why', 'test');          //('参数简写 参数全写', '参数说明')

//program.option('-d --dest <dest>', '例如：-d /src/comps')


//program.on('--help', () => {      //还可以给--help参数设置事件监听器，既会返回参数说明，也会执行事件监听器
//   console.log("");
//   console.log("help");
// })