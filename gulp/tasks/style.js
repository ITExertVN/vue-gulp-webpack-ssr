import gulp from 'gulp'
import sass from 'gulp-sass'
import cssnext from 'gulp-cssnext'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import sourcemaps from 'gulp-sourcemaps'
import concat from 'gulp-concat'

import config from '../config'

gulp.task('style', done => {
  gulp.src(config.style.srcFiles)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sourcemaps.init())
    .pipe(sass(config.style.options))
    .pipe(cssnext())
    .pipe(sourcemaps.write('.'))
    .pipe(concat(config.style.output.filename))
    .pipe(gulp.dest(config.app.buildDir))
  done()
})

gulp.task('style:release', done => {
  gulp.src(config.style.srcFiles)
    .pipe(sass(config.style.prod.options))
    .pipe(cssnext())
    .pipe(concat(config.style.output.filename))
    .pipe(gulp.dest(config.app.releaseDir))
  done()
})
