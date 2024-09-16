import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
   <>
    
   <div className='navbar'>
   <Link to="/">Home</Link>
  <Link to="/addProduct">Add product</Link>
  </div>
    </>
  )
}

export default Navbar