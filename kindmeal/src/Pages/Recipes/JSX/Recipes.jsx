import React from 'react'
import Footer from '../../../components/JSX/Footer'
import Heading from '../../../components/JSX/Heading'
import Navbar from '../../../components/JSX/Navbar';
import styles from "../CSS/Recipes.module.css";
import { Link } from 'react-router-dom';
import { IoMdTime,IoMdHeart } from "react-icons/io";

const Recipes = () => {
  return (
    <div>
        <Heading/>
        <Navbar/>
        
        <div className={styles.mainSearchDiv}>
          <div className={styles.mainDetailsDiv}>
            <div className={styles.titleDiv}>
              <div>Food & Drinks</div>
              <div>Yummy Meat-Free Recipes</div>
            </div>
            <p>Want to craft your own creative meat-free meals? Get inspiration from other food lovers, or share your own masterpieces!</p>
            <p>Transform into a master chef now.</p>
            <form>
              <div className={styles.searchRec}>
                <input type="text" placeholder='Search Recipe or Chef Name'/>
                <select className={styles.slct}>
                  <option>All Categories</option>
                  <option>Beverages</option>
                  <option>Salads</option>
                  <option>Soups</option>
                  <option>Main Dishes</option>
                  <option>Breakfast</option>
                </select>
                <button>Search Recipes</button>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.mainRecipes}>

        <div className={styles.pageBtnDiv}>
          <button>First</button>
          <button>Previous</button>
          <button>1</button>
          <button>Next</button>
          <button>Last</button>
        </div>

        <div className={styles.recipesDiv}>
          
            <div className={styles.singleCard}>
              <div className={styles.chefDisDiv}>
                <div className={styles.chefAvatarDiv}>
                  <img src="https://www.kindmeal.my/photos/member/0/6-m.jpg" alt="" />
                  <Link to="/" className={styles.chefLink}>KindMealChef</Link>
                </div>
                
                <div className={styles.discount}>20% OFF</div>
              </div>
              <Link to="/icecream"><div className={styles.recImageDiv}>
              <img src="https://www.kindmeal.my/photos/recipe/121/121770-18872-l.jpg" alt=""/>
                <h3 className={styles.recTitle}>Ice Scream Sandswiches</h3>
              </div></Link>
              <div className={styles.timeLikeDiv}>
                <div className={styles.timeDiv}>
                    <IoMdTime style={{fontSize: '1.5rem',color: '#676767'}}/>
                    <span>20 Mins</span>
                </div>
                <div className={styles.likeDiv}>
                    <IoMdHeart style={{fontSize: '1.5rem',color: '#676767'}}/>
                    <span>15</span>
                </div>
              </div>

            </div>
            
            <div className={styles.singleCard}></div>
            <div className={styles.singleCard}></div>
        </div>

        <div className={styles.pageBtnDiv}>
          <button>First</button>
          <button>Previous</button>
          <button>1</button>
          <button>Next</button>
          <button>Last</button>
        </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Recipes