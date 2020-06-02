const express = require('express')
const router = express.Router()

const usersController = require('../app/controllers/userController')

router.get('/users',usersController.list)
router.post('/users',)
module.exports = router
