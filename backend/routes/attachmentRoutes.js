const { getAttachment } = require('../controllers/attachmentControllers')
const router=require('express').Router()


router.get('/:id', getAttachment)

const attachmentRouter=router
module.exports=attachmentRouter