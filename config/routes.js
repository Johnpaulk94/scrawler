const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/userController')
const postController = require('../app/controllers/postController')
const authenticateUser = require('../app/middlewares/authentication')
//users
router.post('/users/register',userController.register)
router.post('/users/login',userController.login)
router.put('/users/update',userController.update)
router.delete('/users/logout',userController.logout)
router.get('/users/feeds',userController.userFeeds)


//posts
router.get('/browse',postController.browse)
router.get('/userposts',authenticateUser,postController.list)
router.post('/posts',authenticateUser,postController.create)
router.delete('/posts/:id',authenticateUser,postController.destroy)
router.put('/posts/:id',authenticateUser,postController.edit)
router.get('/posts/:id',authenticateUser,postController.show)


module.exports = router
