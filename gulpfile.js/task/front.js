/*
* @Author: hanjiyun
* @Date:   2018-03-07 22:01:15
* @Last Modified by:   hanjiyun
* @Last Modified time: 2018-03-08 00:51:38
*/

var gulp = require('gulp')
var sass = require('gulp-sass')
var cssnano = require('gulp-cssnano')
var autoprefixer = require('gulp-autoprefixer')
var debug = require('gulp-debug')

var babel = require('babelify')
var browserify = require('browserify')
var uglify = require('gulp-uglify')
var buffer = require('gulp-buffer')
var watchify = require('gulp-watchify')
var watching = false

var FRONT_SCSS_PATH = './static_resource/front/scss/**/*.scss'
var CSS_DEST = './public/css/'

var FRONT_JS_PATH = './static_resource/front/javascript/**/*.js'
var JS_DEST = './public/js/'


var bundlePaths = {
    src: [
      FRONT_JS_PATH
    ],
    dest: JS_DEST
}

gulp.task('front-css', function (cb) {
  return gulp.src([FRONT_SCSS_PATH])
            .pipe(sass().on('error', sass.logError))
            .pipe(debug())
            // .pipe(concat('common.css'))
            .pipe(autoprefixer({
              browsers: ['last 4 versions', 'Firefox > 20', 'ie > 8'],
              cascade: false
            }))
            .pipe(cssnano({
              zindex: false,
              autoprefixer: false,
              discardUnused: {
                fontFace: false
              }
            }))
            .pipe(gulp.dest(CSS_DEST))
})

gulp.task('watch-scss', function () {
  return gulp.watch(FRONT_SCSS_PATH, ['front-css']);
})



gulp.task('enable-watch-mode', function() { watching = true })
// gulp.task('enable-livereload', function() { livereload.listen(3002)})

gulp.task('front-js', watchify(function(watchify) {
  return gulp.src(bundlePaths.src)
      .pipe(watchify({
          watch: watching,
          debug: true,
          setup: function(bundle) {
            bundle.transform(babel, {
                presets: [ 'es2015' ]
            })
          }
      }))
      .pipe(buffer())
      // .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(debug())
      // .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(bundlePaths.dest))
      // .pipe(livereload())
}))

gulp.task('watch-front', [
  'enable-watch-mode',
  'watch-scss',
  'front-js'
])


