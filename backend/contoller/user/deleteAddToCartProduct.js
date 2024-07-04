const addToCartModel = require("../../models/cartProduct")

const deleteAddToCartProduct = async(req,res)=>{
    try{
      const currentUser = req.user
      const addToCartProductId = req.body._id

      const deleteProduct = await addToCartModel.deleteOne({_id : addToCartProductId})

      res.json({
        message : "product Deleted From Cart",
        error : false,
        success:true,
        data : deleteProduct
      })
    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteAddToCartProduct