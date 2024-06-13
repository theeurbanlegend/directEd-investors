const { loginHandler, signupHandler, updateHandler, resetHandler, getInvestorDetails, forgotPassword, resetPassword} = require('../controllers/invControllers')

const router=require('express').Router()


router.post('/login', loginHandler)
router.get('/:id' , getInvestorDetails)
router.post('/signup', signupHandler)
router.post('/update', updateHandler)
router.post('/reset', resetHandler)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password/:token', resetPassword)

const invRouter=router
module.exports=invRouter