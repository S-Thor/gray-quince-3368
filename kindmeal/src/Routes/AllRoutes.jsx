import React from 'react'
import Home from '../Pages/Home/JSX/Home';
import {Routes,Route} from "react-router-dom";
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Recipes from '../Pages/Recipes/JSX/Recipes';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/recipes" element={<Recipes/>}></Route>
    </Routes>
  )
}

export default AllRoutes