const jwt=require('jsonwebtoken')

const jwtSign=(id, name,email,url, role)=>{
    const secret=process.env.ACCESS_SECRET
    const payload={sub:id,name, email, url, role}
    const accessToken= jwt.sign(payload,secret, {expiresIn:'7d' } )
    return accessToken

}
module.exports=jwtSign