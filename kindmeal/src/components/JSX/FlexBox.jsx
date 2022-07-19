import React from 'react';
import {FlexBoxData} from "../../Data/AllData";
import styles from "../CSS/Flexbox.module.css";
import {Link} from "react-router-dom";

const FlexBox = () => {
  return (
    <>
    {/* {FlexBoxData.map((data) => { */}
        <div className={styles.flexMain}>
            <div className={styles.titleDiv}>
                <p>Latest News & Videos</p>
                <div className={styles.listBox}>
                    <a href="#">Save Lives with Your Blog</a>
                    <span>&#9679;</span>
                    <a href="#">News & Articles</a>
                    <span>&#9679;</span>
                    <a href="#">Follow Our Facebook</a>
                </div>
            </div>
        </div>
    {/* })} */}
    </>
  )
}

export default FlexBox