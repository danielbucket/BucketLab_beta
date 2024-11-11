const express = require('express')
const router = express.Router()

const Home_GET_controller = require('../controllers/Home_GET_controller')

router.get('/home/GET_content', Home_GET_controller.GET_content)

module.exports = router