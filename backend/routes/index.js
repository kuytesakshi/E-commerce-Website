const express = require('express')

const router = express.Router()

const userSignupController = require("../contoller/user/userSignin")
const userSignIncontroller =require("../contoller/user/userSignup")
const userDetailsController =require("../contoller/user/userDetails")
const authToken = require("../middleware/authToken")

const userLogout = require('../contoller/user/userLogout')
const allUsers = require('../contoller/user/AllUsers')
const updateUser = require('../contoller/user/updateUser')
const UploadProductController = require('../contoller/product/uploadProduct')
const getProductController = require('../contoller/product/getProduct')
const updateProductController = require('../contoller/product/updateProduct')
const getCategoryProduct = require('../contoller/product/getCategoruProduct')
const getCategoryWiseProduct = require('../contoller/product/getCategoryWiseProduct')
const getProductDetails = require('../contoller/product/getProductDetails')
const addToCartController = require('../contoller/user/addToCartController')
const countAddToCartProduct = require('../contoller/user/countAddToCartProduct')
const addToCartViewProduct = require('../contoller/user/addToCartViewProduct')
const updateAddToCartProduct = require('../contoller/user/updateAddToCartProduct')
const deleteAddToCartProduct = require('../contoller/user/deleteAddToCartProduct')
const searchProduct = require('../contoller/product/searchProduct')
const filterProductController = require('../contoller/product/filterProduct')


router.post("/signup",userSignupController)
router.post("/signin",userSignIncontroller)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)
//admin-panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken, updateUser)
//produc
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product", authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)
router.post("/filetr-product",filterProductController)
//add to cart
router.post("/addToCart",authToken,addToCartController)
router.get("/countAddToProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",deleteAddToCartProduct)


module.exports =router