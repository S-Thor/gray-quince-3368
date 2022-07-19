import React from 'react'
import Home from '../Pages/Home/JSX/Home';
import {Routes,Route} from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
    </Routes>
  )
}

export default AllRoutes