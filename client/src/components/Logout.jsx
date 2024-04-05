import React, { useContext } from 'react'
import { AuthContext } from '../Context/Authprovider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const  handelLog =() =>{
        logOut().then(()=>{
    alert('Sign-out Successful')
    navigate(from,{replace:true})
        }).catch((error)=>{

        })
    }
  return (
    <div className='h-screen  bg-teal-300 flex items-center justify-center'>
      <button className='bg-red-700 px-2 py-2 text-white ' onClick={handelLog}>Logout</button>
    </div>
  )
}

export default Logout
