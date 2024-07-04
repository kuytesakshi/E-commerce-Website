async function userLogout(req,res){
    try{
        res.clearCookie("token",{ path: '/' })
        res.json({
            message : "Logout successful",
            error : false,
            success : true,
            data : []
        })

    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }
}
module.exports = userLogout