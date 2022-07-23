import React from "react";
import styles from "../CSS/Middlesection.module.css";
import pet from "../../../Images/LogoIcon/pet.png";
import MiddleBox from "./MiddleBox";
import featured from "../../../Images/LogoIcon/feature.png";

const MiddleSection = () => {
  return (
    <div className={styles.middleMain}>
      <div className={styles.introDiv}>
        <h2>Introducing The World's 1st Meat-Free Lifestyle Platform</h2>
        <div className={styles.petDiv}>
          <h4>Brought to you by</h4>
          <img src={pet} alt="" />
        </div>
        <h3>
          Instant coupon & dining. No upfront coupon payment, booking or
          printing.
        </h3>
      </div>
      <MiddleBox />
      <h4>
        Any restaurant or cafe can join KindMeal, vegetarian or not, as long as
        the deals and menu featured are meat-free. Enjoy a great meat-free
        dining experience. Easily save animal lives, health, environment and
        money now!
      </h4>
      <div className={styles.joinBtnDiv}>
        <button>
          <h2>Join KindMeal Now</h2>
          <h4>Your tasty journey begins here</h4>
        </button>
      </div>
      <div className={styles.featuredDiv}>
        <h3>As Featured In</h3>
        <img src={featured} alt="#" />
      </div>
    </div>
  );
};

export default MiddleSection;
