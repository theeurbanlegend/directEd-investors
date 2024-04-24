const mongoose=require('mongoose')

const poolSchema= new mongoose.Schema({
    pool_name:{type:String, required:true},
    pool_desc:{type:String},
    pool_commission_rate:{type:String},
    students:[{type:mongoose.Types.ObjectId, ref:'Student'}]
})
const Pool=mongoose.model('Pool', poolSchema)
module.exports=Pool