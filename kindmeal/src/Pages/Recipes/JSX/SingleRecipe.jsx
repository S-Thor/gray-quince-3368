import React,{useState,useEffect,useContext} from "react";
import styles from "../CSS/SingleRecipe.module.css";
import Heading from "../../../components/JSX/Heading";
import Navbar from "../../../components/JSX/Navbar";
import Footer from "../../../components/JSX/Footer";
import { Link, useParams } from "react-router-dom";
import { IoMdTime, IoMdHeart } from "react-icons/io";
import {MealContext} from "../../../Context/MealContext";
import axios from "axios";


const meal = {
  "id": 1,
  "dish": "Banana Bread Latte",
  "dish_image": "https://www.kindmeal.my/photos/recipe/103/103170-15237-l.jpg",
  "chef": "Wolfgang Puck",
  "chef_avatar": "https://www.kindmeal.my/photos/member/0/6-m.jpg",
  "discount": "10%",
  "likes": 5,
  "prepare_time": "5 Mins",
  "category": "Beverages"
};

const added = false;

// const coup = Date.now();
// console.log(coup.getHours());

const SingleRecipe = () => {

  const mealCo = useContext(MealContext);
  console.log("SINGLEMEAL:",mealCo);

  return (
    <div className={styles.singleDiv}>
      <Heading />
      <Navbar />

      <div key={meal.id} className={styles.singleCard}>
        <div className={styles.chefDisDiv}>
          <div className={styles.chefAvatarDiv}>
            <img src={meal.chef_avatar} alt="" />
          </div>
          <Link to="/" className={styles.chefLink}>
            {meal.chef}
          </Link>
          {added ? (
            <div className={styles.discount}>Coupon Added</div>
          ) : (
            <button className={styles.discount}>
              Redeem Coupon
            </button>
          )}
        </div>
        <Link to={`/${meal.dish}`}>
          <div className={styles.recImageDiv}>
            <img src={meal.dish_image} alt="" />
            <h3 className={styles.recTitle}>{meal.dish}</h3>
          </div>
        </Link>
        <div className={styles.timeLikeDiv}>
          <div className={styles.timeDiv}>
            <IoMdTime style={{ fontSize: "1.5rem", color: "#676767" }} />
            <span>{meal.prepare_time}</span>
          </div>
          <div className={styles.likeDiv}>
            <IoMdHeart style={{ fontSize: "1.5rem", color: "#676767" }} />
            <span>{meal.likes}</span>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default SingleRecipe;
