import React from 'react'
import FlexBox from '../../../components/JSX/FlexBox';
import Heading from '../../../components/JSX/Heading'
import Navbar from '../../../components/JSX/Navbar';
import MainSlider from './MainSlider';
import Save from './Save';
import { FlexBoxData } from '../../../Data/AllData';
import MiddleSection from './MiddleSection';

const Home = () => {
  return (
    <div>
        <Heading/>
        <Navbar/>
        <MainSlider/>
        
        <FlexBox/>
        <MiddleSection/>
        <Save/>
    </div>
  )
}

export default Home