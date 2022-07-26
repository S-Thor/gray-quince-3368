import React,{useState,useContext, useEffect} from 'react';
import styles from "../CSS/Loginform.module.css";
import logo from "../../Images/LogoIcon/kmlogo.png";
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const auth = useContext(AuthContext);
  console.log("LoginAuth:",auth);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(() => true);
    if (username !== "" && password !== "") {
    auth.login({username: username,password: password});
    }
    setLoading(() => false);
  }

  useEffect(() => {
  if (auth.isAuth) {
    navigate(`/${auth.user.username}`);
  } else
  {
    navigate(`/login`);
  }
},[auth.isAuth]);


if (loading)
{
  return <h1>Loading...</h1>
}

  return (
    <div className={styles.logDiv}>
        <div className={styles.logoDiv}>
            <img src={logo} alt="logo"/>
        </div>
        
        <p>Member Login</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.logForm}>
            <input type="text" placeholder='Your User Name' onChange={(e) => setUserName(e.target.value)}/><br/>
            <input type="password" placeholder='Your Password' onChange={(e) => setPassword(e.target.value)}/><br/>
            <button type="submit">Login</button>  
          </div>          
        </form>
        <hr/>
        <button type="text" className={styles.fbBtn}>Login with Facebook</button> 
        <div className={styles.anotherLog}>
                <a href="#">Forgot Password?</a>
                <a href="#">Not a member? Sign up FREE!</a>
        </div>
    </div>
  )
}

export default LoginForm