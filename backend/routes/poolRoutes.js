const { getPools, addPool, updatePool, deletePool, getPool } = require('../controllers/poolController')

const router=require('express').Router()


router.get('', getPools)
router.get('/:id', getPool)
router.post('/new', addPool)
router.post('/:id/update', updatePool)
router.post('/:id/delete', deletePool)
router.post('/:poolId/add', deletePool)

const poolRouter=router
module.exports=poolRouter