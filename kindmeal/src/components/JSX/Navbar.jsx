import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../CSS/Navbar.module.css";

const links = [
  {
    to: "/home",
    title: "Home",
  },
  {
    to: `/recipes`,
    title: "Recipes",
  },
  {
    to: "/deals",
    title: "Meal Deals",
  },
  {
    to: "/moments",
    title: "KindMoments",
  },
  {
    to: "/hotpicks",
    title: "Hot Picks",
  },
  {
    to: "/directory",
    title: "Directory",
  },
  {
    to: "/articles",
    title: "Articles",
  },
  {
    to: "/aboutus",
    title: "About Us",
  },
];

const Navbar = () => {
    // console.log(({isActive}));
    
  return (
    <div className={styles.navDiv}>
        <div className={styles.linksDiv}>
      {links.map((link) => (
        
          <NavLink
            key={link.title}
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
