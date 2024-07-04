import React, { useState } from 'react'
import ROLE from '../common/role'
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';
import SummaryApi from "../common/index"
const  ChangeUserRole = ({
  name,
  email,
  role,
  user,
  onClose,
  calFunc,
}) => {
  const [userRole, setuserRole] = useState(role)
  const handleOnChangeSelect = (e) =>{
    setuserRole(e.target.value)

    console.log(e.target.value)
  }
  const updateUserRole =async()=>{
    const fetchResponse =await fetch(SummaryApi.updateUser.url,{
      method : SummaryApi.updateUser.method,
      credentials : 'include',
      headers : {
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        userId:user,
        role: userRole
      })
     
    })
    const responseData =await fetchResponse.json()

   if(responseData.success){
    toast.success(responseData.message)
    onClose()
    console.log("calfunc",calFunc)
    calFunc()
   }

    console.log("role-updated:",responseData)

  }
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50'>
           <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm'>
           <button className='block ml-auto' onClick={onClose}>
                 <IoMdClose /> 
           </button>

            <hl className='pb-4 text-lg font-medium'>ChangeUserRole</hl>
            <p>Name:{name}</p>
            <p>Email: {email}</p>
            <div className='flex items-center justify-between my-4'>
             <p>Role:</p>
             <select className='border px-4 py-1' value={userRole} onChange={handleOnChangeSelect}>
              {
                Object.values(ROLE).map(el =>{
                  return(
                    <option value={el} key={el}>{el}</option>
                  )
                })
              }
              
            </select>
            </div>
          <button className='w-fit mx-auto block border py-1 px-3 rounded-full bg-red-600 text-white hover:bg-red-700' onClick={updateUserRole}>Change Role</button>
           
            </div>
    </div>
   
  )
}

export default ChangeUserRole