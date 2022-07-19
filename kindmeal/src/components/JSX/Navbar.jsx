import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../CSS/Navbar.module.css";

const links = [
  {
    to: "/home",
    title: "Home",
  },
  {
    to: "/",
    title: "Recipes",
  },
  {
    to: "/",
    title: "Meal Deals",
  },
  {
    to: "/",
    title: "KindMoments",
  },
  {
    to: "/",
    title: "Hot Picks",
  },
  {
    to: "/",
    title: "Directory",
  },
  {
    to: "/",
    title: "Articles",
  },
  {
    to: "/",
    title: "About Us",
  },
];

const baseStyle = {
  color: "white",
  textDecoration: "none",
};

const activeStyle = {
  color: "white",
  textDecoration: "none",
};

const Navbar = () => {
    // console.log(({isActive}));
  return (
    <div className={styles.navDiv}>
        <div className={styles.linksDiv}>
      {links.map((link) => (
        
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive ? styles.activeNav : styles.baseNav
            }
          >{link.title}</NavLink>
    
      ))}
      </div>
    </div>
  );
};

export default Navbar;
