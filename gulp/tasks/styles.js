const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const shorthand = require('gulp-shorthand')
const autoprefixer = require('gulp-autoprefixer')
const rename = require("gulp-rename")
const cssbeautify = require('gulp-cssbeautify');

module.exports = function generalStyles() {
  return gulp.src('src/styles/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(shorthand())
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    }))
    // .pipe(rename({ suffix: '.min' }))
    .pipe(cssbeautify())
    .pipe(gulp.dest('build/css'))
}

