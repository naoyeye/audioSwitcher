/*
* @Author: hanjiyun
* @Date:   2018-03-08 15:59:52
* @Last Modified by:   hanjiyun
* @Last Modified time: 2018-03-08 17:17:00
*/


'use strict';
var router = require('express').Router();
var AV = require('leanengine');

var User = AV.Object.extend('_User');


router.get('/', function(req, res, next) {
  res.redirect('/login');
});


router.post('/', function(req, res, next) {
  // var content = req.body.content;
  // var todo = new Todo();
  // todo.set('content', content);
  // todo.save().then(function(todo) {
  //   res.redirect('/todos');
  // }).catch(next);
});

module.exports = router;
