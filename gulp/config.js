const app = {
  srcDir: './src',
  srcFiles: './src/**',
  buildDir: './dist',
  releaseDir: './dist'
}

export default {
  app: app,
  script: {
    srcFiles: app.srcFiles + '/*.js'
  },
  style: {
    srcFiles: app.srcFiles + '/**/*.scss',
    output: {
      filename: 'bundle.css'
    },
    options: {
      outputStyle: 'expanded'
    },
    prod: {
      options: {
        outputStyle: 'compressed'
      }
    }
  }
}
