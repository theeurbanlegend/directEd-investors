const mongoose=require('mongoose')

const studentSchema= new mongoose.Schema({
    student_name:{type:String, required:true},
    bio:{type:String},
    profile:[{url:{type:String}}],
    timeline:[{type:mongoose.Types.ObjectId, ref:'Timeline'}]
})
const Student=mongoose.model('Student', studentSchema)
module.exports=Student