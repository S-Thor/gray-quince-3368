import React,{useContext} from 'react';
import {Navigate} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const auth = useContext(AuthContext);

    if(!auth.user.isAuth) {
        return <Navigate to="/login"/>
    }
  return (
    children
  )
}

export default PrivateRoute