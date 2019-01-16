import gulp from 'gulp'
import webpack from 'webpack'
import webpackConfig from '../../webpack.server.config'

gulp.task('serverScript', (done) => {
  const webpackRun = webpack(webpackConfig)
  webpackRun.run((err) => {
    if (err) {
      console.log('Error', err)
    }
    done()
  })
})

gulp.task('serverScript:release', (done) => {
  const webpackRun = webpack(webpackConfig)
  webpackRun.run((err) => {
    if (err) {
      console.log('Error', err)
    }
    done()
  })
})
