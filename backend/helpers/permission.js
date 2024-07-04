const userModel = require("../models/userModels")


  
    const uploadProductPermission = async(user) =>{
        const userId =await userModel.findById(user)

        if(user.role === 'ADMIN'){
            return false
        }
        return true
    }
     


module.exports = uploadProductPermission
