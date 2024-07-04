import React, { useEffect, useState } from 'react'
import UploadProducts from '../components/UploadProducts'
import SummaryApi from '../common'
import AdminproductCard from '../components/AdminproductCard'
function AllProducts() {
  const [openUploadProduct,setOpenUploadProduct] = useState(true)
  
  const [allProduct, setAllProduct] = useState([])

  const fetchAllproduct = async()=>{
    const response =await fetch(SummaryApi.allProduct.url)
    const dataResponse = await response.json()

    setAllProduct(dataResponse?.data || [])
  }

  useEffect(()=>{
   fetchAllproduct()
  },[])



  return (
    <div>
         <div className='bg-white py-2 px-4 flex justify-between items-center'>
             <h2 className='font-bold text-lg'>All Product</h2>
             <button className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full ' onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
        </div>
      
      <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll '>
         {
          allProduct.map((product,index)=>{
            return (
              <AdminproductCard data={product} key={index+"allProduct"} fetchData={fetchAllproduct} />
            )
          })
         }
      </div>
    
     {/* upload products */}
     {
      openUploadProduct &&(
        <UploadProducts onClose={()=>setOpenUploadProduct(false)} fetchData={fetchAllproduct}/>
      )
     }
     
    </div>
   
  )
}

export default AllProducts