import React from 'react'

const Navbar = () => {

  return (
    <div className= 'navbar'>
        <ul>
            <li><img src="/images/logo.png" alt="nav-logo" /></li>
            <li>Home</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Shop</li>
            <li>Contact Us</li>
            <li>Login</li>
            <li>SignUp</li>
            <li><span>0</span> &nbsp; Cart</li>
            <span><i class="fa-solid fa-bars"></i></span>
        </ul>
    </div>
  )
}

export default Navbar