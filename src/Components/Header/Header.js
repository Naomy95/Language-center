import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           
            
               <nav className='navbar'>
              <div className='navbar-container'>
                    <a href="/">Language</a>
                    </div>
                   <div className='navbar-a'>
                   <a href="/home">Home</a>
                    <a href="/services">Our Services</a>
                    <a href="/about">About us</a>
                    <a href="/contact">Contact</a>
                   </div>
              
               </nav>
            
         
        </div>
    )
}

export default Header
