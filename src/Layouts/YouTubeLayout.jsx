import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const YouTubeLayout = () => {
  return (
    <div className='flex flex-col'>
        <NavBar/>
        <div className='flex justify-between'>
            <div className='border w-1/5 h-[90vh]'></div>
            <Outlet/>
            <div className='border w-1/5 h-[90vh]'></div>
        </div>
    </div>
  )
}

export default YouTubeLayout