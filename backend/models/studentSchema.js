const mongoose=require('mongoose')

const studentSchema= new mongoose.Schema({
    student_name:{type:String, required:true},
    bio:{type:String},
    profile:[{url:{type:String}}],
    pools_in:[{type:mongoose.Types.ObjectId,ref:'Pool'}],
    timeline:[{type:mongoose.Types.ObjectId, ref:'Timeline'}]
})
const Student=mongoose.model('Student', studentSchema)
module.exports=Student