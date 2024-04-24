const mongoose=require('mongoose')

const timelineSchema= new mongoose.Schema({
    student_id:{type:mongoose.Types.ObjectId, required:true, ref:'Student'},
    institution:{type:String},
    years:{type:Number},
    achievements:{type:String}
})
const Timeline=mongoose.model('Timeline', timelineSchema)
module.exports=Timeline