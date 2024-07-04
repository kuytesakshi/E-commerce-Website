const userModel =require('../../models/userModels')

async function updateUser(req,res){
    try{
        const sessionUser =req.user
       const {user, email, name ,role} = req.body

       const payload ={
        ...(email && {email : email}),
        ...(name && {name : name}),
        ...(role && {role : role}),
        
       }

       const user1 = await userModel.findById(sessionUser)
       console.log("user.role",user1.role)

       const updateUser = await  userModel.findByIdAndUpdate(user,payload)

       res.json({
        data : updateUser,
        message : "user Updated",
        success :true,
        error :false
       })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }

}
module.exports = updateUser