const mongoose=require('mongoose')

const studentSchema= new mongoose.Schema({
    student_name:{type:String, required:true},
    education:{type:String},
    careerGoals:{type:String},
    fundingNeed:{type:String},
    achievements:[{type:mongoose.Types.ObjectId, ref:'Timeline'}],
    profile:[{url:{type:String}}],
    pools_in:[{type:mongoose.Types.ObjectId,ref:'Pool'}]
})
const Student=mongoose.model('Student', studentSchema)
module.exports=Student