const { loginHandler, signupHandler, updateHandler, resetHandler } = require('../controllers/invControllers')

const router=require('express').Router()


router.post('/login', loginHandler)
router.post('/signup', signupHandler)
router.post('/update', updateHandler)
router.post('/reset', resetHandler)

const invRouter=router
module.exports=invRouter