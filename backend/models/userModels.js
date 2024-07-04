const moongose = require('mongoose')

const userSchema = new moongose.Schema({
     name :String,
     email : {
        type : String,
        unique : true,
        required : true,
        

     },
     password : String,
     profilePic : String,
     role: {
        type: String,
        default: "GENERAL",
      }

}, {
    timestamps : true
})
const userModel = moongose.model("user", userSchema)
module.exports = userModel