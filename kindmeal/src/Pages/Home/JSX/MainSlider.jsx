import React, { useEffect } from 'react';
import styles from "../CSS/MainSlider.module.css";
import {mainSectionData} from "../../../Data/AllData"

const MainSlider = () => {
  
  return (
    <div className={styles.mainSliderDiv}>
        <div className={styles.leftDiv}>
          <img src={mainSectionData[0].shopMealURL} alt=""/>
          
        </div>
        <div className={styles.rightDiv}>
          <img src={mainSectionData[0].shopURL} alt=""/>
        </div>
    </div>
  )
}

export default MainSlider