const express = require('express')
const router = express.Router()

const AuthRouter_GET_controller = require('../controllers/AuthRouter_GET_controller.js')

router.get('/login', AuthRouter_GET_controller.login)
router.get('/logout', AuthRouter_GET_controller.logout)

module.exports = router