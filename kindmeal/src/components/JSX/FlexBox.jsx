import React from 'react';
import {FlexBoxData} from "../../Data/AllData";
import styles from "../CSS/Flexbox.module.css";
import {Link} from "react-router-dom";
import dog from "../../Images/Latest/latest1.jpg";

const FlexBox = () => {
  // console.log("DT:",data);
  return (
    <div className={styles.mainFlexBox}>
    {FlexBoxData.map((dt) => (
        <div key={dt.title} className={styles.flexMain}>
            <div className={styles.titleDiv}>
                <p>{dt.title}</p>
                <div className={styles.listBox}>
                    <a href="#">{dt.list[0]}</a>
                    <span style={{fontSize: "0.5rem",color: "#999999"}}>&#9679;</span>
                    <a href="#">{dt.list[1]}</a>
                    <span style={{fontSize: "0.5rem",color: "#999999"}}>&#9679;</span>
                    <a href="#">{dt.list[2]}</a>
                </div>
            </div>
            <div className={styles.cardBox}>
              {dt.card.map((crd,index) => (
                    <div key={index} className={styles.card}>
                      <div className={styles.cardImgDiv}>
                        <img src={crd.image} alt="#"/>
                      </div>
                      <a href="#">{crd.desc}</a>
                    </div>
              ))}
            </div>
        </div>
    ))}
    </div>
  )
}

export default FlexBox