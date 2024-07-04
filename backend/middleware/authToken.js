const jwt  = require('jsonwebtoken')

async function authToken(req,res,next){
    try {
        const token = req.cookies?.token 
        console.log("token:",token)
        if(!token){
            return res.json({
                message : "Please Login....!",
                error : true,
                success : false
            })
        }
        jwt.verify(token, process.env.TOKEN_SECRET_KEY,(err, decoded) =>{

            console.log("decoded ", decoded)
            if (err) {
                return res.status(401).json({
                    message: "Invalid token",
                    error: true,
                    success: false
                });
            }
            console.log("Token decoded",decoded)
            req.user = decoded?._id
            
            next();

        })

    } catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })

    }
}

module.exports = authToken