import React from 'react'
import '../assests/css/HomeScreen.css'

import Navbar from '../components/Navbar.js'
import Banner from '../components/Banner'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* NAVBAR */}
        <Navbar />

        {/* BANNER */}
        <Banner />

        {/* ROWS */}
    </div>
  )
}

export default HomeScreen