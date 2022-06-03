
1. package.json中配置Bin,然后执行 npm link,就可以将ritsu命令映射到全局，就可以在终端中使用了，使用时执行了index,js。

2. 安装commander.js用于配置指令 (/index.js)

3. 封装自定义的 -h/--help指令返回的指令说明 (/core/help.js)

4. 封装自定义指令-create (/core/create.js)

  4.1 封装定义自定义指令的action (/core/actions.js)
  4.2 安装download-git-repo包用于实现从github的仓库下载项目模板 
  4.3 封装定义模板项目地址的文件  (/config/repo...js)
  4.4 封装自定义指令的行为中执行终端命令相关代码  (/util/terminal.js)

（像vue-cli可以帮我们创建配置好的项目目录，原理就是提前把项目放到github仓库中，git create命令就是从仓库中下载到本地）

5. 封装自定义指令-addcomp (/core/create.js)
  
  5.1 定义.ejs模板文件，定义要生成的组件的模板 (template/components.vue.ejs)
  5.2 在/core/actions.js中定义 addcomp指令的 action
  5.3 封装编译ejs模板的函数，安装ejs包 (utils/compile.js)
  5.4 封装将编译ejs模板的结果写入文件的函数 (utils/write.js)


编写顺序：

package.json -> index.js -> help.js  
                         -> create.js -> actions.js -> repo-config.js
                                                    -> terminal.js



补充：inquirer.js可以实现vue-cli创建项目时选择配置的功能