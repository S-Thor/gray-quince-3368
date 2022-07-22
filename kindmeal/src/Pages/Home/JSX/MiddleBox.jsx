import React from "react";
import styles from "../CSS/Middlebox.module.css";
import { middleBoxData } from "../../../Data/AllData";

const MiddleBox = () => {
  return (
    <div className={styles.mainBox}>
      {middleBoxData.map((data) => (
        <div key={data.title} className={styles.singleMiddle}>
          <img src={data.image} alt="#" />
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default MiddleBox;
