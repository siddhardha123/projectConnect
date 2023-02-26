import React from 'react'
import authContext from '../context/authContext'
import { useContext } from 'react'
import SecondaryNavbar from '../components/shared/SecondaryNav'
const Dashboard = () => {
  const updateContext = useContext(authContext)

  return (
  <>

    <SecondaryNavbar />
    <div className=' mt-5'>
      <div className='flex justify-between px-5'>
        <p className='text-6xl text-black'>welcome to dash board {updateContext.data.name}</p>
        
      </div>

    </div>
    </>
  )
}

export default Dashboard;