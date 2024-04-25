const { addStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/studentController')

const router=require('express').Router()


router.post('/new', addStudent)
router.get('', getStudents)
router.post('/:id/update', updateStudent)
router.post('/:id/delete', deleteStudent)

const studentRouter=router
module.exports=studentRouter