const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4020
const router = require('./routers/router.js')
const authRouter = require('./routers/authRouter.js')

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.common.js')('development')
  const compiler = webpack(webpackConfig)

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }))
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, '../dist')))

app.use('/', (req,res) => {
  res.send(path.join(__dirname, '../dist', 'index.html'))
})

app.get('/api/v1', router)
// app.get('/api/auth', authRouter)
app.get('/api/auth/login', (req,res) => {
  console.log('dick in face')
  
  res.status(200).json({
    loggedIn: false
  })
})

// app.get('/mcpoops', (req, res) => {
//   res.status(200).json({
//     loggedIn: false
//   })
// })

app.listen(PORT, () => {
  console.log(`BucketLab Server is running on port ${PORT}`)
})