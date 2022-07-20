import React from 'react';
import Footer from '../components/JSX/Footer';
import Heading from "../components/JSX/Heading";
import Navbar from '../components/JSX/Navbar';
import SignupForm from '../components/JSX/SignupForm';

const Signup = () => {
  return (
    <div>
        <Heading/>
        <Navbar/>
        <SignupForm/>
        <Footer/>
    </div>
  )
}

export default Signup