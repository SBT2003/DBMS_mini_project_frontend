import React from 'react'
import'./Navbar.css'

export default function Navbar() {
  return (
    <nav>
        <a className='atag' href='/'>Home</a>
        <a className='atag' href='/SignUp'>Sign Up</a>
        <a className='atag' href='/login'>Log In</a>
        <a className='atag' href='/AboutUs'>About Us</a>
        <a className='atag' href='/logout'>Log out</a>
    </nav>
  )
}
