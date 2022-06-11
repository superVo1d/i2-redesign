const gulp = require('gulp')

module.exports = function imageMinify() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('build/images'))
}
