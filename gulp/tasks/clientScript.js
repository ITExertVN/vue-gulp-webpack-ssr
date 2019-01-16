import gulp from 'gulp'
import webpack from 'webpack'
import webpackConfig from '../../webpack.config'
import merge from 'webpack-merge'

gulp.task('clientScript', (done) => {
  const webpackRun = webpack(merge(webpackConfig, {
    devtool: '#source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"develop"'
        }
      })
    ]
  }))
  webpackRun.run((err) => {
    if (err) {
      console.log('Error', err)
    }
    done()
  })
})

gulp.task('clientScript:release', (done) => {
  const webpackRun = webpack(merge(webpackConfig, {
    devtool: '#source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ]
  }))
  webpackRun.run((err) => {
    if (err) {
      console.log('Error', err)
    }
    done()
  })
})
