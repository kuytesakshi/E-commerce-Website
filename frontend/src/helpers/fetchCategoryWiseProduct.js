const { default: SummaryApi } = require("../common")

const fetchCategoryWiseProduct = async(category)=>{
    const response = await fetch(SummaryApi.categoryWiseProduct.url,{
        method :SummaryApi.categoryWiseProduct.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category :category
        })

    })
    const responseData = await response.json()
    return responseData
}

export default fetchCategoryWiseProduct