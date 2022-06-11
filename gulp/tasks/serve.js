const gulp = require('gulp')

const imageMinify = require('./imageMinify')
const svgSprite = require('./svgSprite')
const generalStyles = require('./styles')
const generalScripts = require('./scripts')
const pug2html = require('./pug2html')

const server = require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
    server.init({
      server: 'build',
      notify: false,
      open: true,
      cors: true
    });

    gulp.watch('src/images/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify, readyReload))
    gulp.watch('src/images/sprite/*.svg', gulp.series(svgSprite, readyReload))
    gulp.watch('src/styles/**/*.scss', gulp.series(generalStyles, readyReload))
    gulp.watch('src/js/*.js', gulp.series(generalScripts, readyReload))
    gulp.watch('src/**/*.pug', gulp.series(pug2html, readyReload))

    return cb()
}
