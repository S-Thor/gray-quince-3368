import React,{useState} from 'react';
import styles from "../CSS/Loginform.module.css";
import logo from "../../Images/LogoIcon/kmlogo.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  let navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [username,setUserName] = useState("");
  const [userData,setUserData] = useState({
    isAuth: false,
    email: "",
    password: "",
    username: ""
  });

  function handleSubmit(e){
    e.preventDefault();
    console.log(email,password,username);
    axios.post(`http://localhost:8080/users`,{
      isAuth: false,
      email: email,
      password: password,
      username: username
    })
    .then((res) => {
      console.log(res);
      setEmail(() => "");
      setPassword(() => "");
      setUserName(() => "");
      navigate("/login");
    })
    .catch((err) => console.log(err));
    
  }

  return (
    <div className={styles.signDiv}>
        <div className={styles.logoDiv}>
            <img src={logo} alt="logo"/>
        </div>
        
        <p>Member Login</p>
        <form className={styles.signForm} onSubmit={handleSubmit}>
            <input value={username} type="text" placeholder='Your User Name' onChange={(e) => setUserName(e.target.value)}/><br/>
            <input value={email} type="email" placeholder='Your Email' onChange={(e) => setEmail(e.target.value)}/><br/>
            <input value={password} type="password" placeholder='Your Password' onChange={(e) => setPassword(e.target.value)}/><br/>
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