const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userModel =require('../../models/userModels')
async function userSignIncontroller(req,res){
    try{
        const {email, password, name} = req.body

        if(!email){
          throw new Error("Please provide email")
        }
        if(!password){
          throw new Error("Please provide password")
        }

        const user = await userModel.findOne({email})
        if(!user){
          throw new Error("User not found")
        }

        const checkPassword = await bcrypt.compare(password,user.password)
        console.log("checkpassword", checkPassword)

        if(checkPassword){
          const tokenData ={
            _id : user._id,
            email : user.email,
          }
          const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60});
          const tokenOption = {
            httpOnly : true,
            secure : true
          }
          res.cookie("token",token,tokenOption).json({
            message : "Login Successfully",
            data : token,
            success : true,
            error : false
          })



        }else{
            throw new Error("Please check password")
        }

    }catch(err){
        return res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignIncontroller