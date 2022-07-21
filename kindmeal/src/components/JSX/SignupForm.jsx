import React from 'react';
import styles from "../CSS/Loginform.module.css";
import logo from "../../Images/LogoIcon/kmlogo.png"

const SignupForm = () => {
  return (
    <div className={styles.signDiv}>
        <div className={styles.logoDiv}>
            <img src={logo} alt="logo"/>
        </div>
        
        <p>Member Login</p>
        <form className={styles.signForm}>
            <input type="text" placeholder='Your User Name'/><br/>
            <input type="email" placeholder='Your Email'/><br/>
            <input type="password" placeholder='Your Password'/><br/>
            <button type="submit">Signup</button>            
        </form>
        <hr/>
        <button type="text" className={styles.fbBtn}>Signup with Facebook</button> 
        <div className={styles.anotherSign}>
                <a href="#">Already have an Account?Login</a>
                <a href="#">Choose another Account</a>
        </div>
    </div>
  )
}

export default SignupForm