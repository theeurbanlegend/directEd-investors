// const router = require("express").Router()
// const passport = require('passport')

// router.get("/login/failed", (req,res) => {
//     res.statusCode(401).json({
//         error:true,
//         message:"Failed to login"
//     })
// })

// router.get("/login/success", (req,res) => {
//     // if(req.user) {
//         res.statusCode(200).json({
//             error:false,
//             message:"Successfully logged in",
//             user:req.user
//         })
//     } else {
//         res.statusCode(403).json({
//             error:true,
//             message:"Not AUthorised"
//         })
//     }
// })

// router.get(
//     '/google/callback',
//     passport.authenticate('google', {
//         successRedirect: '/dashboard',
//         failureRedirect: '/login/failed'
//     })
// )
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

// router.get('/logout', (req, res) => {
//     req.logout()
//     res.redirect('http://localhost:5173')
// })

// module.exports = router