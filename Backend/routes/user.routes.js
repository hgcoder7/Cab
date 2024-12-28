const express= require('express');
const router=express.Router();
const {body}=require('express-validator')
const userController= require('../controllers/user.controller')
const authMiddleware=require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 character'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 character')
],
userController.registerUser)
router.options('/login', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://cabify-zdbf.onrender.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(204); // No content for preflight
});

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://cabify-zdbf.onrender.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}, userController.loginUser);



// router.post('/login',[
//     body('email').isEmail().withMessage('Invalid Email'),
//     body('password').isLength({min:6}).withMessage('Password must be at least 6 character')
// ],
// userController.loginUser
// );

router.get('/profile',authMiddleware.authUser, userController.getUserProfile);
router.get('/logout',authMiddleware.authUser, userController.logoutUser);




module.exports=router;
