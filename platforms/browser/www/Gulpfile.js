const {src, dest, watch, parallel} = require('gulp');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

//dir
var cssDir     = './scripts/css/';
var sassDir    = './static/scss/**/*.scss';

//sass-dev minify
function sassdevMin() {
   return src(sassDir)
      .pipe(plumber())
      .pipe(sass({
         errorLogToConsole: true
      }))
      .on('error', console.error.bind(console))
      .pipe(postcss([cssnano()]))
      .pipe(rename({
         suffix: '.min'
      }))
      .pipe(dest(cssDir))
      .pipe(browserSync.stream());
}

// sass-dev normal
function sassdevNormal() {
   return src(sassDir)
      .pipe(plumber())
      .pipe(sass({
         errorLogToConsole: true
      }))
      .on('error', console.error.bind(console))
      .pipe(dest(cssDir))
      .pipe(browserSync.stream());
}

//minify css app
function minifyApp() {
   return src('./scripts/css/app.css')
      .pipe(postcss([cssnano()]))
      .pipe(rename({
         suffix: '.min'
      }))
      .pipe(dest(cssDir))
      .pipe(browserSync.stream());
}

//watching scss and minify
function dev() {
   watch('./static/scss/**/*.scss', sassdevMin);
   watch('./static/scss/**/*.scss', sassdevNormal);
   watch('./scripts/css/app.css', minifyApp);
}

exports.LiveDev      = dev;