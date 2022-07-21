import React,{useState} from 'react';
import styles from "../CSS/Loginform.module.css";
import logo from "../../Images/LogoIcon/kmlogo.png";
import axios from 'axios';

const LoginForm = () => {
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log("SSS");
    axios.get(`http://localhost:8080/users`,{
      params: {
        username: username,
        password: password
      }
    })
    .then((res) => {
      console.log("RES:",res);
    })
    .catch((err) => console.log(err));
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