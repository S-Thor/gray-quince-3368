import React from "react";
import styles from "../CSS/Footer.module.css";
import { footerData } from "../../Data/AllData";
import { Link } from "react-router-dom";

const listItem = [
  "Home",
  "Sign Up",
  "Businesses / Restaurateurs",
  "Advertising",
  "About KindMeal.my",
  "Help & FAQ",
  "Terms & Conditions",
  "Inspiring Partners",
  "Lifestyle Ambassadors",
  "Jobs & Careers",
  "Contact Us",
];

const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <div className={styles.listItems}>
        {footerData.map((data) => (
          <ul key={data.title} className={styles.titleDiv}>
            <p className={styles.listTitle}>{data.title}</p>
            {data.listItem.map((item) => (
              <Link key={item} to="/" className={styles.listItem}>
                <li>{item}</li>
              </Link>
            ))}
          </ul>
        ))}
      </div>
      <div className={styles.copyrightDiv}>
        <p>Copyright © KindMeal.my, 2014 - 2022. All rights reserved.</p>
        <p>
          This website promotes compassionate, meat-free dining experience. Some
          food may contain eggs, dairy products or alcohol, please view individual
          listings for details.
        </p>
      </div>
    </div>
  );
};

export default Footer;
