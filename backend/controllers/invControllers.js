const Investor = require('../models/investorSchema')
const bcrypt=require('bcrypt')
const jwtSign = require('../auth/jwtSign')

const loginHandler=async(req, res)=>{
    const {investor_email, password}=req.body
    if(!investor_email || !password){
        return res.status(400).json({msg:"Email or passowrd are required"})
    }
    const loginUser=await Investor.findOne({investor_email}).populate('investments').populate('pools_invested.pool_id').populate('pools_invested.students_selected')
    if(!loginUser){
        return res.status(404).json({msg:"Not found!"})
    }
    //password check
    const isValidPass=await bcrypt.compare(password, loginUser.password)
    if(!isValidPass) return res.status(403).json({msg:"Unauthorised!"})
    const accessToken=jwtSign(loginUser._id, loginUser.investor_name, loginUser.investor_email, loginUser?.profile[0]?.url)
    return res.status(200).json({"accessToken":accessToken, "inv":loginUser})
}
const signupHandler=async(req, res)=>{
    const {investor_name, investor_email, password, profile,bio}=req.body
    if(!investor_name||!investor_email|| !password){
        return res.status(400).json({msg:"Email or password are required"})
    }
    const userExists=await Investor.findOne({investor_email})
    if(userExists){
        return res.status(409).json({msg:"User already exists"})
    }
    const hashed=await bcrypt.hash(password, 10)
    const newUser=new Investor({investor_name, investor_email,profile,bio,password:hashed, pools_invested:[], investments:[] })
    await newUser.save()
    const accessToken=jwtSign(newUser._id, newUser.investor_name, newUser.investor_email, newUser?.profile[0]?.url)
    return res.status(201).json({"accessToken":accessToken})
}
const updateHandler=async(req, res)=>{
    //profile will come later
    const {investor_name,investor_email,newemail,bio, password, newpassword}=req.body
    if(!investor_email || !password){
        return res.status(400).json({msg:"Email or passowrd are required"})
    }
    const updateUser=await Investor.findOne({investor_email:investor_email})
    if(!updateUser){
        return res.status(404).json({msg:"Not found!"})
    }
    //password check
    const isValidPass=await bcrypt.compare(password, updateUser.password)
    if(!isValidPass) return res.status(403).json({msg:"Unauthorised!"})
    if(newemail) updateUser.investor_email=newemail
    if(bio) updateUser.bio=bio
    if(investor_name) updateUser.investor_name=investor_name
    if(newpassword){
        const hashed=await bcrypt.hash(newpassword, 10)
        updateUser.password=newpassword
    }
    await updateUser.save()
    const accessToken=jwtSign(updateUser._id, updateUser.investor_name, updateUser.investor_email, updateUser?.profile[0]?.url)
    return res.status(201).json({"accessToken":accessToken})
}
const resetHandler=async(req, res)=>{
    const {investor_email, password}=req.body
    if(!investor_email || !password){
        return res.status(400).json({msg:"Email or password are required"})
    }
    const loginUser=await Investor.findOne({investor_email})
    if(!loginUser){
        return res.status(404).json({msg:"Not found!"})
    }
    //password check
    const hashed=await bcrypt.hash(password, 10)
    return res.status(200).json({status:"Password reset! Please login again"})
    
}
module.exports={ loginHandler, signupHandler, updateHandler, resetHandler}