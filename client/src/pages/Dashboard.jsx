import React from 'react'
import authContext from '../context/authContext'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
const Dashboard = () => {
  const updateContext = useContext(authContext)
  const navigate = useNavigate()
  const logout = () =>{
       updateContext.login = false
       console.log(updateContext)
       navigate("/")
  }
  return (
    <>  
       <div>
             <p className='text-6xl text-black'>welcome to dash board {updateContext.data.email}</p>
             <button className='p-2 text-2xl' onClick={logout}>Logout</button>
       </div>
    
    </>
  )
}

export default Dashboard