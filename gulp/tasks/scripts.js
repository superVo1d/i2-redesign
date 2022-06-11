const gulp = require('gulp')
const uglify = require('gulp-uglify')

module.exports = function generalScripts() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
}