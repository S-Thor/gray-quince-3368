import React, { useEffect,useState } from 'react'
import Footer from '../../../components/JSX/Footer'
import Heading from '../../../components/JSX/Heading'
import Navbar from '../../../components/JSX/Navbar';
import styles from "../CSS/Recipes.module.css";
import { Link } from 'react-router-dom';
import { IoMdTime,IoMdHeart } from "react-icons/io";
import axios from 'axios';

const Recipes = () => {
  const [meals,setMeals] = useState([]);
  const [page,setPage] = useState(1);
  const added = false;
  useEffect(() => {
    axios.get(`http://localhost:8080/meals?_page=${page}&_limit=6`)
      .then((res) => {console.log(res);setMeals(res.data);})
      .catch((err) => console.log(err));
  },[page])
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
          <button onClick={() => setPage(1)}>First</button>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
          <button>{page}</button>
          <button onClick={() => setPage(page + 1)}>Next</button>
          <button>Last</button>
        </div>

        <div className={styles.recipesDiv}>
          {meals.map((meal) => (
            <div className={styles.singleCard}>
              <div className={styles.chefDisDiv}>
                <div className={styles.chefAvatarDiv}>
                  <img src={meal.chef_avatar} alt="" />
                  
                </div>
                <Link to="/" className={styles.chefLink}>{meal.chef}</Link>
                {added ? <div className={styles.discount}>Coupon Added</div> :<Link to="/" className={styles.discount}>Get {meal.discount} OFF</Link>}
              </div>
              <Link to={`/${meal.dish}`}><div className={styles.recImageDiv}>
              <img src={meal.dish_image} alt=""/>
                <h3 className={styles.recTitle}>{meal.dish}</h3>
              </div></Link>
              <div className={styles.timeLikeDiv}>
                <div className={styles.timeDiv}>
                    <IoMdTime style={{fontSize: '1.5rem',color: '#676767'}}/>
                    <span>{meal.prepare_time}</span>
                </div>
                <div className={styles.likeDiv}>
                    <IoMdHeart style={{fontSize: '1.5rem',color: '#676767'}}/>
                    <span>{meal.likes}</span>
                </div>
              </div>

            </div>
            ))}
            
            
        </div>

        <div className={styles.pageBtnDiv}>
          <button onClick={() => setPage(1)}>First</button>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
          <button>{page}</button>
          <button onClick={() => setPage(page + 1)}>Next</button>
          <button>Last</button>
        </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Recipes