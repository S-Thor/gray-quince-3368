import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from "../CSS/SingleRecipe.module.css";
import Heading from '../../../components/JSX/Heading';
import Navbar from '../../../components/JSX/Navbar';
import Footer from '../../../components/JSX/Footer';

const SingleRecipe = () => {
    const [single,setSingle] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const params = useParams();
    console.log("PARAM:",params);
    
    function getData() {
        axios.get(`https://json-server-project-masai.herokuapp.com/meals/${params.recipe}`)
            .then((res) => {console.log(res);setSingle(res.data);})
            .catch((err) => setError(() => err))
    }

    useEffect(() => {
        setLoading(true);
        getData();
        setLoading(false);
    },[])
   
    if(loading){
        return <div className={styles.loaderContainer}><div className={styles.planet}></div></div>
    }
    

  return (
    <div>
        <Heading/>
        <Navbar/>
        <div className={styles.mainDetailsDiv}>
            <h2 className={styles.dishName}>{single.dish}</h2>
            <div className={styles.imageDetailContainer}>
                <div className={styles.imageDiv}>
                    <img src={single.dish_image} alt="dish"/>
                </div>
                <div className={styles.detailsDiv}>
                    <div className={styles.flexDetailsDiv}>
                        <div className={styles.detailDiv}>
                            <h2>Time</h2>
                            <h3> {single.prepare_time}</h3>
                        </div>
                        <div className={styles.detailDiv}>
                            <h2>Chef</h2>
                            <h3> {single.chef}</h3>
                        </div>
                    </div>
                    <div className={styles.flexDetailsDiv}>
                        <div className={styles.detailDiv}>
                            <h2>Likes</h2>
                            <h3> {single.likes}</h3>
                        </div>
                    </div>
                    <div className={styles.flexDetailsDiv}>
                        <div className={styles.detailDiv}>
                            <h2>Category</h2>
                            <h3> {single.category}</h3>
                        </div>
                        <div className={styles.detailDiv}>
                            <h2>Discount</h2>
                            <h3> {single.discount}</h3>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default SingleRecipe