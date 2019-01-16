import gulp from 'gulp'
import del from 'del'
import config from '../config'

gulp.task('clean', cb => {
  return del(config.app.releaseDir, cb)
})

gulp.task('clean:release', cb => {
  return del(config.app.releaseDir, cb)
})
