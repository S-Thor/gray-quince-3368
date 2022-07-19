import React from 'react'
import FlexBox from '../../../components/JSX/FlexBox';
import Heading from '../../../components/JSX/Heading'
import Navbar from '../../../components/JSX/Navbar';
import MainSlider from './MainSlider';
import Save from './Save';

const Home = () => {
  return (
    <div>
        <Heading/>
        <Navbar/>
        <MainSlider/>
        {/* <Save/> */}
        <FlexBox/>
    </div>
  )
}

export default Home