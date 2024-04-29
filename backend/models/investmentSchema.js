const mongoose=require('mongoose')

const investmentSchema= new mongoose.Schema({
    pool_invested:{type:mongoose.Types.ObjectId, ref:'Pool'},
    investor:{type:mongoose.Types.ObjectId, ref:'Investor'},
    tokens_invested:{type:String},
    investment_status:{type:String},
    potential_returns:{type:String},
}, {timestamps:true})
const Investment=mongoose.model('Investment', investmentSchema)
module.exports=Investment