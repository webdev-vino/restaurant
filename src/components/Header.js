import React from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'

const Header = () => {
  return (
    <div className='header'>
        <Navbar />
        <HomePage />
    </div>
  )
}

export default Header