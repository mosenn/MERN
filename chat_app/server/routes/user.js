const userRouter = require('express').Router()
const {registerUser} = require('../controller/Conuser')

userRouter.post('/register' , registerUser );

module.exports = userRouter