/*
* @Author: hanjiyun
* @Date:   2018-03-07 22:01:15
* @Last Modified by:   naoyeye
* @Last Modified time: 2018-03-19 13:03:06
*/

var gulp = require('gulp')
var debug = require('gulp-debug')

// scss/css
var sass = require('gulp-sass')
var cssnano = require('gulp-cssnano')
var autoprefixer = require('gulp-autoprefixer')

// js/es6
var babelify = require('babelify')
var browserify = require('browserify')
var uglify = require('gulp-uglify')
var buffer = require('gulp-buffer')
var watchify = require('gulp-watchify')
var sourcemaps = require('gulp-sourcemaps');
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
// gulp.task('disable-watch-mode', function() { watching = false })

// gulp.task('enable-livereload', function() { livereload.listen(3002)})

gulp.task('front-js', watchify(function(watchify) {
  return gulp.src(bundlePaths.src)
    .pipe(watchify({
        watch: watching,
        debug: true,
        setup: function(bundle) {
          bundle.transform(babelify, {
            presets: ['es2015']
          })
        }
    }))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(debug())
    .pipe(gulp.dest(bundlePaths.dest))
}))

gulp.task('watch-js', watchify(function(watchify) {
  return gulp.src(bundlePaths.src)
      .pipe(watchify({
          watch: watching,
          debug: true,
          // setup: function(bundle) {
          //   bundle.transform(babelify, {
          //     presets: ['es2015']
          //   })
          // }
      }))
      .pipe(buffer())
      .pipe(debug())
      .pipe(gulp.dest(bundlePaths.dest))
      // .pipe(livereload())
}))

gulp.task('watch-front', [
  'enable-watch-mode',
  'watch-scss',
  'watch-js'
])


gulp.task('build-front', [
  'front-css',
  'front-js'
])


