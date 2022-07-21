import React from 'react';
import styles from "../CSS/Loginform.module.css";
import logo from "../../Images/LogoIcon/kmlogo.png"

const LoginForm = () => {
  return (
    <div className={styles.logDiv}>
        <div className={styles.logoDiv}>
            <img src={logo} alt="logo"/>
        </div>
        
        <p>Member Login</p>
        <form className={styles.logForm}>
            <input type="email" placeholder='Your Email'/><br/>
            <input type="password" placeholder='Your Password'/><br/>
            <button type="submit">Login</button>            
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