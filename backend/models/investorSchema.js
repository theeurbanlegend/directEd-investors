const mongoose=require('mongoose')

const investorSchema= new mongoose.Schema({
    investor_name:{type:String, required:true},
    investor_email:{type:String, unique:true},
    profile:[{url:{type:String}}],
    bio:{type:String},
    password:{type:String},
    pools_invested:[{
        pool_id:{type:mongoose.Types.ObjectId, ref:'Pool'},
        students_selected:[{type:mongoose.Types.ObjectId, ref:'Student'}]
    }]
})
const Investor=mongoose.model('Investor', investorSchema)
module.exports=Investor