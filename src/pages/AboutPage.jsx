import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const AboutPage = () => {
  return (
    <div>
      {/* <NavBar/> */}
      AboutPage


       <Link to={"/"}><button className='border p-2 cursor-pointer'>Home Page</button></Link>
      <Link to={"/contact"}><button className='border p-2 cursor-pointer'>Contact Page</button></Link>
    </div>
  )
}

export default AboutPage