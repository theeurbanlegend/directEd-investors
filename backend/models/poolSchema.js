const mongoose=require('mongoose')

const poolSchema= new mongoose.Schema({
    pool_name:{type:String, required:true},
    pool_desc:{type:String},
    pool_target_amnt:{type:String},
    pool_progress:{type:String},
    pool_commission_rate:{type:String},
    pool_extra_desc:{type:String},
    students:[{type:mongoose.Types.ObjectId, ref:'Student'}]
}, {timestamps:true})
const Pool=mongoose.model('Pool', poolSchema)
module.exports=Pool