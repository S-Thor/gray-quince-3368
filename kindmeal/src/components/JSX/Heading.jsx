import React from "react";
import styles from "../CSS/Heading.module.css";
import mainLogo from "../../Images/LogoIcon/kmlogo.png";
import blog from "../../Images/LogoIcon/blog.png";
import fb from "../../Images/LogoIcon/fb.png";
import twitter from "../../Images/LogoIcon/twitter.png";

const Heading = () => {
  const isAuth = false;
  return (
    <div className={styles.headDiv}>
      <div className={styles.kmLogoDiv}>
        <img src={mainLogo} alt="logo" />
      </div>
      <div className={styles.socialDiv}>
        <img src={blog} alt="blogLogo" />
        <img src={fb} alt="blogLogo" />
        <img src={twitter} alt="blogLogo" />
      </div>
      {isAuth ? (
        <div>Logout</div>
      ) : (
        <div className={styles.authDiv}>
          <div>Login</div>
          <div>Signup</div>
        </div>
      )}
    </div>
  );
};

export default Heading;
