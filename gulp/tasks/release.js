import gulp from 'gulp'
import runSequence from 'gulp4-run-sequence'

gulp.task('release', cb => {
  runSequence(
    'clean:release',
    ['style:release', 'clientScript:release', 'serverScript:release'],
    cb
  )
})
