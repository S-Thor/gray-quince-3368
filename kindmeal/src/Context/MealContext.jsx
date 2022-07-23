import React, { createContext, useState } from "react";
import axios from "axios";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
    const [meal,setMeal] = useState([]);

    const addMeal = (id) => {
        axios.get(`http://localhost:8080/meals/${id}`)
            .then((res) => console.log("ADDMEAL:",res))
            .catch((err) => console.log(err));
    }

    const addLikes = (id,num) => {
        axios.patch(`http://localhost:8080/meals/${id}`,{likes: num + 1})
          .then((res) => {
            console.log("LIKES:",res);
          })
    }

    const addCoup = (ml) => {
        setMeal([...meal,ml]);
    }
    return (
        <MealContext.Provider value={{ meal,addMeal,addLikes ,addCoup}}>
          {children}
        </MealContext.Provider>
      );
}