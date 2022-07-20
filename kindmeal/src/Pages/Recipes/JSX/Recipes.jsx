import React from 'react'
import Footer from '../../../components/JSX/Footer'
import Heading from '../../../components/JSX/Heading'
import Navbar from '../../../components/JSX/Navbar';
import styles from "../CSS/Recipes.module.css"

const Recipes = () => {
  return (
    <div>
        <Heading/>
        <Navbar/>
        {/* <Footer/> */}
        <div className={styles.mainSearchDiv}>
          <div className={styles.mainDetailsDiv}>
            <div className={styles.titleDiv}>
              <div>Food & Drinks</div>
              <div>Yummy Meat-Free Recipes</div>
            </div>
            <p>Want to craft your own creative meat-free meals? Get inspiration from other food lovers, or share your own masterpieces!</p>
            <p>Transform into a master chef now.</p>
            <form>
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
            </form>
          </div>
        </div>
    </div>
  )
}

export default Recipes