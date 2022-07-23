import React from 'react'
import Footer from '../components/JSX/Footer'
import Heading from '../components/JSX/Heading'
import Navbar from '../components/JSX/Navbar'

const AboutUs = () => {
  return (
    <div>
        <Heading/>
        <Navbar/>
        <h1 style={{height: '50vh'}}>About Us</h1>
        <Footer/>
    </div>
  )
}

export default AboutUs