import React from "react";
import styles from "../CSS/FlexSlider.module.css";
import fs from "../../../Images/deal/s1.jpg";
import { flexSliderData } from "../../../Data/AllData";

const FlexSlider = () => {
  return (
    <div className={styles.mainFlexSlides}>
      {flexSliderData.map((data) => (
        <div className={styles.imgDiv}>
          <img src={data} alt="#" />
        </div>
      ))}
    </div>
  );
};

export default FlexSlider;
