const mongoose=require('mongoose')

const studentSchema= new mongoose.Schema({
    name:{type:String, required:true},
    education:{type:String},
    careerGoals:{type:String},
    fundingNeed:{type:String},
    achievements:[{type:mongoose.Types.ObjectId, ref:'Timeline'}],
    profile:[{avatarId:{type:mongoose.Types.ObjectId}}],
    pools_in:[{type:mongoose.Types.ObjectId,ref:'Pool'}]
})
const Student=mongoose.model('Student', studentSchema)
module.exports=Student