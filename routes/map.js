'use strict';
var router = require('express').Router();
var AV = require('leanengine');

// var phantom = require('node-phantom');
// const screenshot = require('screenshot-stream');
// var driver = require('node-phantom-simple')
const screenshot = require('screenshot-phantom');

// var Todo = AV.Object.extend('Todo');

router.get('/', function(req, res, next) {
  res.render('map', {
  });
  // var query = new AV.Query(Todo);
  // query.descending('createdAt');
  // query.find().then(function(results) {
  //   res.render('todos', {
  //     title: 'TODO 列表',
  //     todos: results
  //   });
  // }, function(err) {
  //   if (err.code === 101) {
  //     // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
  //     // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
  //     res.render('todos', {
  //       title: 'TODO 列表',
  //       todos: []
  //     });
  //   } else {
  //     next(err);
  //   }
  // }).catch(next);
});


router.get('/screenshot', function(req, res, next) {
  console.log('准备截图 ing')
  screenshot({

    /*
     * 必填参数: 由网站url组成的数组
     */
    urls: [
      'http://localhost:3000/map#world'
    ],

    /*
     * 下面参数均为选填参数，示例值均为参数默认值
     */

    /*
     * 选填参数: 设置定时截屏的规则
     * 快捷值: 'everyMinute' | 'everyHour' | 'everyDay' | 'everyWeek' | 'everyMonth'
     * 或者使用js包"node-schedule"中其他的规则值，如：'0 * * * * *'（详见“链接”中地址）
     */
    rule: '',

    /*
     * 选填参数: 设置截屏视口宽度
     */
    width: 1024,

    /*
     * 选填参数: 设置截屏视口高度
     */
    height: 768,

    /*
     * 选填参数: 设置输出图片文件的格式 (pdf|png|jpeg)
     */
    format: 'jpeg',

    /*
     * 选填参数: 设置进入页面到执行截图之间的时间（保证资源加载完成）
     */
    timeout: 15000,

    /*
     * 选填参数: 设置截屏图片质量 (0-100)
     */
    quality: 75,

    /*
     * 选填参数: 由输出图片文件的自定义名字前缀组成的数组，与urls一一对应，length相同
     */
    picNamePrefix: ['map'],

    /*
     * 选填参数: 设置输出图片文件保存的路径
     */
    pathName: './public/screenshot/'

  });
});

module.exports = router;
