#!/usr/bin/env node

const program = require('commander');

//设置版本号，参数为--version时返回。require()函数返回package.json文件中的对象，获取其版本
program.version(require('./package.json').version);








//获取参数，Node中有一个线程对象process，运行时传入的参数保存在其argv属性中
program.parse(process.argv);  