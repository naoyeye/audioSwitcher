var config = require('../config/clean');
var del = require('del');
var gulp = require('gulp');

gulp.task('clean', function(cb) {
  del(config.files, cb);
});
