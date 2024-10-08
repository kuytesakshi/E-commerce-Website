import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify';
import moment from 'moment'
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';
function AllUsers() {
    const [allUser,setAllUsers] = useState([])
    const [openUpdaterole ,setOpenUpdateRole] = useState(false)
    const [updateUserDetails,setUpdateUserdetails] = useState({
      email : "",
      name : "",
      role : "",
      _id: "",

    })
    const fetchAllUsers = async()=>{
        const fetchData = await fetch(SummaryApi.allUser.url,{
            method : SummaryApi.allUser.method,
            credentials :'include'
        })

        const dataResponse =await fetchData.json()
        if(dataResponse.success){
          setAllUsers(dataResponse.data)
        }
        if(dataResponse.error){
          toast.error(dataResponse.message)
        }
     
    }
  useEffect(()=>{
    fetchAllUsers()
  }, [])

  return (
    <div className='bg-white pb-4 '>
      <table className='w-full userTable'>
         <thead>
          <tr className='bg-black text-white'> 
             <th>Sr.</th>
             <th>Name</th>
             <th>Email</th>
             <th>Role</th>
             <th>Created Date</th>
             <th>Action</th>

          </tr>
             
         </thead>
         <tbody className=''>
            {
                 allUser.map((el,index) =>{
                  return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{el?.name}</td>
                        <td>{el?.email}</td>
                        <td>{el?.role}</td>
                        <td>{moment(el?.createdAt).format('LL')}</td>
                        <td>
                          <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white'
                           onClick={()=>{
                            setUpdateUserdetails(el)
                            setOpenUpdateRole(true)
                            }
                          }
                            >
                          <MdModeEdit />
                          </button>
                        </td>
                    </tr>
                  )
                 })
            }
         </tbody>
         {
          openUpdaterole && (
            <ChangeUserRole 
            onClose={()=>setOpenUpdateRole(false)}
             name={updateUserDetails.name}
             email={updateUserDetails.email}
             role={updateUserDetails.role}
             user={updateUserDetails._id}
             calFunc={fetchAllUsers}
             />
          )
         }
       

      </table>
    </div>
  )
}

export default AllUsers