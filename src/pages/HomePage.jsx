import React from 'react'
import Carts from '../components/Carts'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const HomePage = () => {
  return (
    <div>
      {/* <NavBar/> */}
      {/* <Carts/> */}
      This is Home Page

      <Link to={"/about"}><button className='border p-2 cursor-pointer'>About Page</button></Link>
      <Link to={"/contact"}><button className='border p-2 cursor-pointer'>Contact Page</button></Link>
    </div>
  )
}

export default HomePage