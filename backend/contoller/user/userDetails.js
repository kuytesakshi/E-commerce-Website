const userModel =  require('../../models/userModels')

async function userDetailsController(req,res){
    try{
      console.log("user id",req.user)

       const user = await userModel.findById(req.user)
       res.status(200).json({
        data: user,
        error : false,
        success : true,
        message : "User Details"
       })
       console.log("user" , user)
    } catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })

    }
}

module.exports = userDetailsController