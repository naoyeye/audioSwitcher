var gulp = require('gulp');

gulp.task('release:build', [
  'vendor',
  'webpack:release'
]);

gulp.task('release', ['clean'], function() {
  gulp.start('release:build')
});
