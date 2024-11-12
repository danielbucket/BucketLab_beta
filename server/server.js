const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4020 // port 4020 is also the devServer port found in webpack.dev.js
const router = require('./routers/router.js')
const authRouter = require('./routers/authRouter.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, '../dist')))

app.use('/', (req,res) => {
  res.send(path.join(__dirname, '../dist', 'index.html'))
})

app.get('/api/v1', router)
app.get('/api/auth', authRouter)

app.get('/mcpoops', (req, res) => {
  res.send('McShitty Poops')
})

app.listen(PORT, () => {
  console.log(`BucketLab Server is running on port ${PORT}`)
})