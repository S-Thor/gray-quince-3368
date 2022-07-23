import React, { useEffect } from "react";
import styles from "../CSS/MainSlider.module.css";
// import {mainSectionData} from "../../../Data/AllData";
import SwiftSlider from "react-swift-slider";
import { slider1 } from "../../../Data/AllData";
import { slider2 } from "../../../Data/AllData";

const arr = [24, 543, 35, 45, 245];

const MainSlider = () => {
  return (
    <div className={styles.mainSliderDiv}>
      <div className={styles.leftDiv}>
        <SwiftSlider data={slider1} height={330} showDots={false} />
      </div>
      <div className={styles.rightDiv}>
        <SwiftSlider data={slider2} height={330} showDots={false} />
      </div>
    </div>
  );
};

export default MainSlider;
