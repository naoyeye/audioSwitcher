# audioSwitcher

A leancloud app

Leancloud / Express / React / Redux / Gulp / Webpack / ES6



```bash

#=======#
#  开发  #
#=======#

# 安装依赖
yarn

# 编译前后台通用的 css
# 在 /gulpfile.js/task/styles.js 配置
gulp build:basecss

# 编译前后台通用的 js
# 在 /gulpfile.js/entry/basejs.js 配置
gulp webpack:build -e basejs

# 编译管理后台 react 开发中一些通用的库
# 在 /gulpfile.js/config/webpack-dll.config.js 配置
gulp webpack:vendor

# 如果要开发管理后台页面
gulp webpack:dev -e admin # 开发：后台整体

# 如果要开发前台页面
gulp watch-front # 开发：前台 js css


# 运行本地 leancloud 开发环境
lean up -p 3002 # 一般开发
# 或者
# 带 LeanCloud SDK 调试 log 的开发
# https://leancloud.cn/docs/leanengine_webhosting_guide-node.html#hash833170
env DEBUG=leancloud:request lean up -p 3002 

# 访问 http://localhost:3002/ 进行调试



#=======#
#  上线  #
#=======#

# 编译后台 react 代码
gulp webpack:build -e admin

# 编译前台 js/css 代码
gulp watch-front

# github 提交
git add -A;
git commit -am 'your commit message';
git push origin master;

# 发布到 leancloud 预备环境
lean deploy 

# 发布到 leancloud 生产环境
lean publish

```


如果要装前端开发的依赖：

```
yarn add <package...> [--dev/-D]
```

安装 nodejs 的依赖包可以不用加后面的 -dev 参数

-----

GPL License

