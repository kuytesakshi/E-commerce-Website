import React from 'react'
import { useState } from 'react';
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import imageToBase64 from '../helpers/imageToBase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
function SignUp() {
    const [showPassword, setShowPassword] =useState(true)
    const [data,setData] = useState({
        email : "",
        password : "",
        name : "",
        confirmPassword : "",
        profilePic : ""
    })

    const navigate = useNavigate()
    const [showConfimPassword, setConfirmPassword] = useState(false)
     
    const handleOnChange = (e) =>{
        const { name , value } = e.target
        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })

    }
    const handleUploadPic = async(e) =>{
        const file = e.target.files[0]

        const imagePic = await imageToBase64(file)
        
        setData((preve)=>{
            return{
                ...preve,
                profilePic : imagePic
            }
        })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()

        if(data.password === data.confirmPassword){
               console.log("Summary.signup.url",SummaryApi.signUp.url)

               const dataResponse =await fetch ('http://localhost:8000/api/signup',{
                method : "post",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(data)
               })
               const dataApi =await dataResponse.json()
               
               if(dataApi.success){
                toast.success(dataApi.message)
                navigate("/login")
               }
               if(dataApi.error){
                toast.error(dataApi.message)
               }
               
               console.log("data", dataApi)
        }else{
            toast.error("please check password and confirm password.")
        }
     

    }

    console.log("data login ", data);
  return (
    <section id='login'>
          <div className='mx-auto container p-4'>
            <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                  <div className='w-20 h-20 mx-auto relative overflow-hidden'>
                    <div>
                    <img src={data.profilePic || loginIcons} alt='login icons'></img>
                    </div>
                    <form>
                        <label>
                        <div className='text-xs bg-opacity-80 bg-slate-100 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                        Upload Photo
                    </div>
                    <input type='file' className='hidden' onChange={handleUploadPic}/>
                        </label>
                    
                    </form>
                     
                    
                  </div>
                  <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit} >
                  <div className='grid'>
                        <label>Name:</label>
                        <div className='bg-slate-100 p-2'>
                            <input type='text' name='name' value={data.name} onChange={handleOnChange} required placeholder='enter name' className='w-full h-full outline-none bg-transparent'/>
                        </div>
                       
                    </div>
                    <div className='grid'>
                        <label>Email:</label>
                        <div className='bg-slate-100 p-2'>
                            <input type='email' name='email' value={data.email} onChange={handleOnChange} required placeholder='enter email' className='w-full h-full outline-none bg-transparent'/>
                        </div>
                       
                    </div>
                    <div>
                        <label>Password</label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input type={showPassword ? "text" : "password"} name='password' value={data.password} onChange={handleOnChange} required placeholder='enter password' className='w-full h-full outline-none bg-transparent'/>
                            <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                 <span>
                                    {
                                    showPassword ? (
                                        <FaEyeSlash />
                                    ):(
                                        <FaEye/>
                                    )
                                     
                                }

                                 </span>
                            </div>
                        </div>
                        
                     
                        
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input type={showConfimPassword ? "text" : "password"} name='confirmPassword' value={data.confirmPassword} onChange={handleOnChange} required placeholder='enter confirm password' className='w-full h-full outline-none bg-transparent'/>
                            <div className='cursor-pointer text-xl' onClick={()=>setConfirmPassword((preve)=>!preve)}>
                                 <span>
                                    {
                                    setShowPassword ? (
                                        <FaEyeSlash />
                                    ):(
                                        <FaEye/>
                                    )
                                     
                                }

                                 </span>
                            </div>
                        </div>
                        
                    
                    </div>
                    
                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>SignUp</button>
                  
                  </form>
                <p className='my-5'>Already have an account . <Link to={"/login"} className=' text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>

            </div>
          </div>
    </section>
    
  )
}

export default SignUp