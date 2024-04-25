const { getPools, addPool, updatePool, deletePool } = require('../controllers/poolController')

const router=require('express').Router()


router.get('', getPools)
router.post('/new', addPool)
router.post('/:id/update', updatePool)
router.post('/:id/delete', deletePool)
router.post('/:poolId/add', deletePool)

const poolRouter=router
module.exports=poolRouter