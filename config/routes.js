const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/userController')
const postController = require('../app/controllers/postController')
const authenticateUser = require('../app/middlewares/authentication')
//users
router.post('/users/register',userController.register)
router.post('/users/login',userController.login)
router.put('/users/update',userController.update)
router.delete('/users/logout',authenticateUser,userController.logout)



//posts
router.get('/posts',authenticateUser,postController.browse)
router.post('/posts/new',authenticateUser,postController.create)
router.delete('/posts/:id',authenticateUser,postController.destroy)
router.put('/posts/:id',authenticateUser,postController.edit)
router.get('/users/:id/posts',postController.userpostslist)


module.exports = router
