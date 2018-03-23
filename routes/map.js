'use strict';
var router = require('express').Router();
var AV = require('leanengine');

var fs = require('fs');
var url = require('url');
var phantomjs = require('phantomjs-prebuilt');

// var phantom = require('node-phantom');
// const screenshot = require('screenshot-stream');
// var driver = require('node-phantom-simple')
// const screenshot = require('screenshot-phantom');

// var Todo = AV.Object.extend('Todo');

router.get('/', function(req, res, next) {
  res.render('map', {
  });
});


router.get('/screenshot', function(req, res, next) {
  console.log('准备截图 ing')

  makeScreenshot('https://randomstreetview.com/#fullscreen', (err, filename) => {
    if (err) {
      return res.end(err);
    }

    fs.readFile(filename, function(err, buffer) {
      if (err) {
        // res.end(err.message);
        res.jsonp({
          'success': false,
          'url': null
        })
      } else {
        // res.setHeader('Content-Type', 'image/jpeg');
        // res.end(buffer);
        res.jsonp({
          'success': true,
          'url': '/screenshot/map.jpg'
        })
      }
    })
  });

});



function makeScreenshot(url, callback) {
  const filename = `./public/screenshot/map.jpg`;
  const program = phantomjs.exec('/utils/phantomjs-web.js', url, filename);

  program.stdout.pipe(process.stdout);

  var stderr = '';

  program.stderr.on('data', data => {
    stderr += data.toString();
  });

  program.on('exit', () => {
    callback(stderr === '' ? null : stderr, filename);
  });
}


module.exports = router;
