import React, { useContext } from 'react'
import Home from '../Pages/Home/JSX/Home';
import {Routes,Route} from "react-router-dom";
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Recipes from '../Pages/Recipes/JSX/Recipes';
import { AuthContext } from '../Context/AuthContext';
import PrivateRoute from './PrivateRoute';


const AllRoutes = () => {
  const auth = useContext(AuthContext);

  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/recipes" element={<PrivateRoute><Recipes/></PrivateRoute>}></Route>
        <Route path="/recipes/:recipe" element={<PrivateRoute><Recipes/></PrivateRoute>}></Route>
        <Route path="/:username" element={<Home/>}></Route>
    </Routes>
  )
}

export default AllRoutes