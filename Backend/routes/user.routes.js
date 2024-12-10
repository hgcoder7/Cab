const express= require('express');
const router=express.Router();
const {body}=require('express-validator')
const userController= require('../controllers/user.controller')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 character'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 character')
],
userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 character')
],
userController.loginUser
)




module.exports=router;