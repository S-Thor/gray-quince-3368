import React, { useContext, useEffect } from "react";
import Heading from "../components/JSX/Heading";
import Navbar from "../components/JSX/Navbar";
import { AuthContext } from "../Context/AuthContext";
import styles from "./Recipes/CSS/Recipes.module.css";
import { Link } from "react-router-dom";
import { IoMdTime, IoMdHeart } from "react-icons/io";
import Footer from "../components/JSX/Footer";

const Coupons = () => {
  const coup = useContext(AuthContext);
  console.log("COUPON-CONTEXT:", coup);
  const meals = coup.user.coupons;
  const total = coup.user.coupons.length;

  const handleRedeem = (id) => {
    coup.redeem(id);
  };

  return (
    <div>
      <Heading />
      <Navbar />

      {total === 0 ? (
        <h1 style={{ height: "50vh" }}>Add Coupons</h1>
      ) : (
        <div>
          <h1>Your Coupons</h1>

          <div className={styles.mainRecipes}>
            <div className={styles.recipesDiv}>
              {meals.map((meal, index) => (
                <div key={meal.id} className={styles.singleCard}>
                  <div className={styles.chefDisDiv}>
                    <div className={styles.chefAvatarDiv}>
                      <img src={meal.chef_avatar} alt="" />
                    </div>
                    <Link to="/" className={styles.chefLink}>
                      {meal.chef}
                    </Link>

                    <div className={styles.couponCode}>
                      {Math.floor(Math.random() * 1000000001)}
                    </div>
                  </div>
                  <Link to={`/recipes/${meal.id}`}>
                    <div className={styles.recImageDiv}>
                      <img src={meal.dish_image} alt="" />
                      <h3 className={styles.recTitle}>{meal.dish}</h3>
                    </div>
                  </Link>
                  <div className={styles.timeLikeDiv}>
                    <div className={styles.timeDiv}>
                      <IoMdTime
                        style={{ fontSize: "1.5rem", color: "#676767" }}
                      />
                      <span>{meal.prepare_time}</span>
                    </div>
                    <div className={styles.likeDiv}>
                      <IoMdHeart className={styles.likeIcon} />
                      <span>{meal.likes}</span>
                    </div>
                  </div>
                  <div
                    className={styles.redeemDiv}
                    onClick={() => handleRedeem(meal.id)}
                  >
                    Redeem Coupon
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Coupons;
