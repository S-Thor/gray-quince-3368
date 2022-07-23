import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const addMeal = (id) => {
    axios
      .get(`https://json-server-project-masai.herokuapp.com/meals/${id}`)
      .then((res) => console.log("ADDMEAL:", res))
      .catch((err) => console.log(err));
  };

  const addLikes = (id, num) => {
    axios
      .patch(`https://json-server-project-masai.herokuapp.com/meals/${id}`, {
        likes: num + 1,
      })
      .then((res) => {
        console.log("LIKES:", res);
      });
  };

  // const addCoup = (ml) => {
  //     setMeal([...meal,ml]);
  // }
  return (
    <MealContext.Provider value={{ addMeal, addLikes }}>
      {children}
    </MealContext.Provider>
  );
};
