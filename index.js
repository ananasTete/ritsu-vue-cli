#!/usr/bin/env node

const program = require('commander');

const helpOptions = require('./lib/core/help');
const createCommonds = require('./lib/core/create');



// 1. 设置版本号，指令为--version时返回。require()函数返回package.json文件中的对象，获取其版本
program.version(require('./package.json').version);

// 2. 封装自定义 -h/--help指令返回的选项说明
helpOptions();

// 3. 封装自定义指令，,会自动添加到指令说明中去
createCommonds();


//获取参数，一般放到最后。Node中有一个线程对象process，运行时传入的参数保存在其argv属性中
program.parse(process.argv);  