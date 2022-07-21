import React,{useContext} from "react";
import styles from "../CSS/Heading.module.css";
import mainLogo from "../../Images/LogoIcon/kmlogo.png";
import blog from "../../Images/LogoIcon/blog.png";
import fb from "../../Images/LogoIcon/fb.png";
import twitter from "../../Images/LogoIcon/twitter.png";
import { Link } from "react-router-dom";
import cart from "../../Images/LogoIcon/cart.png";
import { AuthContext } from "../../Context/AuthContext";

const Heading = () => {
  
  const auth = useContext(AuthContext);
  console.log("Head",auth);
  
  const handleLogout = () => {
    auth.logout(auth.user.id);
  }

  if (auth.user.isAuth){
  return (
    <div className={styles.headDiv}>
      <div className={styles.kmLogoDiv}>
        <Link to="/"><img src={mainLogo} alt="logo" /></Link>
      </div>
      <div className={styles.socialDiv}>
        <Link to="/blog"><img className={styles.socialIcon} src={blog} alt="blogLogo" /></Link>
        <Link to="/fb"><img className={styles.socialIcon} src={fb} alt="blogLogo" /></Link>
        <Link to="/twitter"><img className={styles.socialIcon} src={twitter} alt="blogLogo" /></Link>
      </div>
        <div className={styles.isAuthDiv}>
          <Link to="/coupons"><div className={styles.cartDiv}>
            <img src={cart} alt=""/>
            <span>5</span>
          </div></Link>
          <h3>{auth.user.username}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      
    </div>
  );
 }
 return (
  <div className={styles.headDiv}>
    <div className={styles.kmLogoDiv}>
      <Link to="/"><img src={mainLogo} alt="logo" /></Link>
    </div>
    <div className={styles.socialDiv}>
      <Link to="/blog"><img className={styles.socialIcon} src={blog} alt="blogLogo" /></Link>
      <Link to="/fb"><img className={styles.socialIcon} src={fb} alt="blogLogo" /></Link>
      <Link to="/twitter"><img className={styles.socialIcon} src={twitter} alt="blogLogo" /></Link>
    </div>
    
      <div className={styles.authDiv}>
        <div><Link to="/login" style={{textDecoration: 'none',color: 'white'}}>Login</Link></div>
        <div><Link to="/signup" style={{textDecoration: 'none',color: 'white'}}>Signup</Link></div>
      </div>
    
  </div>
);
};

export default Heading;
