/**
 * 使用本地编译
 */

var gulp = require('gulp')
var concat = require('gulp-concat')
var sass = require('gulp-sass')
var cssnano = require('gulp-cssnano')
var autoprefixer = require('gulp-autoprefixer')

var DEST = './public/dest/'
var COMMON_STYLE_PATH = './static_resource/common/stylesheets/common.scss'

gulp.task('build:basecss', function (cb) {
  return gulp.src([COMMON_STYLE_PATH])
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('common.css'))
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
            .pipe(gulp.dest(DEST))
})
