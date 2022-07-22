import React, { useEffect, useState,useContext } from "react";
import Footer from "../../../components/JSX/Footer";
import Heading from "../../../components/JSX/Heading";
import Navbar from "../../../components/JSX/Navbar";
import styles from "../CSS/Recipes.module.css";
import { Link } from "react-router-dom";
import { IoMdTime, IoMdHeart } from "react-icons/io";
import {AuthContext} from "../../../Context/AuthContext";
import axios from "axios";

const Recipes = () => {
  
  const [meals, setMeals] = useState([]);
  const [mealChef, setMealChef] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const like = useContext(AuthContext);
  console.log("LikeContext:",like);
  const added = false;
  let [total,setTotal] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/meals?_page=${page}&_limit=6`)
      .then((res) => {
        console.log(res);
        setTotal(Number(res.headers["x-total-count"]));
        setMeals(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(mealChef, type);
    if (type === "all") {
      axios
        .get(`http://localhost:8080/meals?q=${mealChef}&_limit=6`, {
          params: {
            category: [
              "Beverages",
              "Salads",
              "Soups",
              "Main Dishes",
              "Breakfast",
            ],
          },
        })
        .then((res) => {
          console.log("SEARCH:", res);
          if (res.data[0] === undefined)
          {
            alert("No Recipe or Chef Found. Try Again");
          } else
          {
            setMeals(() => res.data);
          }})
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`http://localhost:8080/meals?q=${mealChef}`, {
          params: {
            category: [type],
          },
        })
        .then((res) => {
          console.log("SEARCH:", res);
          if (res.data[0] === undefined)
          {
            alert("No Recipe or Chef Found. Try Again");
          } else
          {
            setMeals(() => res.data);
          }})
        .catch((err) => console.log(err));
    }
  }


  function handleLikes(id) {
      like.addLikes(id);
  }
  return (
    <div>
      <Heading />
      <Navbar />

      <div className={styles.mainSearchDiv}>
        <div className={styles.mainDetailsDiv}>
          <div className={styles.titleDiv}>
            <div>Food & Drinks</div>
            <div>Yummy Meat-Free Recipes</div>
          </div>
          <p>
            Want to craft your own creative meat-free meals? Get inspiration
            from other food lovers, or share your own masterpieces!
          </p>
          <p>Transform into a master chef now.</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.searchRec}>
              <input
                type="text"
                placeholder="Search Recipe or Chef Name"
                onChange={(e) => {
                  setMealChef(e.target.value);
                  
                }}
              />
              <select
                className={styles.slct}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="Beverages">Beverages</option>
                <option value="Salads">Salads</option>
                <option value="Soups">Soups</option>
                <option value="Main Dishes">Main Dishes</option>
                <option value="Breakfast">Breakfast</option>
              </select>
              <button type="submit">Search Recipes</button>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.mainRecipes}>
        <div className={styles.pageBtnDiv}>
        <Link to={`/recipes/1`} className={styles.pageBtn}><button disabled={page === 1} onClick={() => setPage(1)}>First</button></Link>
        <Link to={`/recipes/${page - 1}`} className={styles.pageBtn}><button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Previous
          </button></Link>
          <button>{page}</button>
          <Link to={`/recipes/${page + 1}`} className={styles.pageBtn}><button disabled={page === total/6} onClick={() => setPage(page + 1)}>Next</button></Link>
          <Link to={`/recipes/${total/6}`} className={styles.pageBtn}><button disabled={page === total/6} onClick={() => setPage(total/6)}>Last</button></Link>
        </div>

        <div className={styles.recipesDiv}>
          {meals.map((meal) => (
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
                  <Link to="/" className={styles.discount}>
                    {meal.discount} OFF
                  </Link>
                )}
              </div>
              <Link to={`/recipes/${meal.id}`}>
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
                <div className={styles.likeDiv} onClick={() => handleLikes(meal.id)}>
                  <IoMdHeart style={{ fontSize: "1.5rem", color: "#676767" }} />
                  <span>{meal.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pageBtnDiv}>
        <Link to={`/recipes/1`} className={styles.pageBtn}><button disabled={page === 1} onClick={() => setPage(1)}>First</button></Link>
        <Link to={`/recipes/${page - 1}`} className={styles.pageBtn}><button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Previous
          </button></Link>
          <button>{page}</button>
          <Link to={`/recipes/${page + 1}`} className={styles.pageBtn}><button disabled={page === total/6} onClick={() => setPage(page + 1)}>Next</button></Link>
          <Link to={`/recipes/${total/6}`} className={styles.pageBtn}><button disabled={page === total/6} onClick={() => setPage(total/6)}>Last</button></Link>
        </div>

      <Footer />
    </div>
    </div>
  );
}

export default Recipes;
