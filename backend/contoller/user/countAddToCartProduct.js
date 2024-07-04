const addToCartModel = require("../../models/cartProduct");

const countAddToCartProduct = async (req, res) => {
    try {
        const userId = req.userId; // Make sure this matches the field in your schema
        console.log("User from request:", userId);
            
        const count = await addToCartModel.countDocuments({ user: userId });
    console.log("count",count)
     return   res.json({
            data: { count: count },
            message: "ok",
            error: false,
            success: true
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = countAddToCartProduct




