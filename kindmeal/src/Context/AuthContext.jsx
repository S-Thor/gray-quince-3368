import React, { createContext, useState,useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState();

  console.log("USER:", user);


  // useEffect(() => {
  //   axios.get(`http://localhost:8080/users`,{
  //     params: {
  //       isAuth: true
  //     }
  //   })
  //   .then ((res) => {console.log("RRR:",res);setUser(() => res.data[0]);setIsAuth(() => true);})
  // },[])
  // let id;

  // const login = (data) => {
  //   axios
  //     .get(`http://localhost:8080/users`, {
  //       params: data,
  //     })
  //     .then((res) => {
  //       console.log("LOG:", res);
  //       if (res.data[0] == undefined) {
  //         alert("Wrong Passwod or UserName. Try Again");
  //         setIsAuth(() => false);
  //       } else {
  //         id = res.data[0].id;

  //         axios
  //           .patch(`http://localhost:8080/users/${id}`, { isAuth: true })
  //           .then((res) => {
  //             console.log("AFTERLOG:", res);
  //             setIsAuth(() => res.data.isAuth);
  //             setUser(() => res.data);
  //           })
  //           .catch((err) => console.log(err));
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const logout = (id) => {
  //   axios
  //     .patch(`http://localhost:8080/users/${id}`, { isAuth: false })
  //     .then((res) => {
  //       console.log("out:", res.data);
  //       setIsAuth(() => res.data.isAuth);
  //       setUser(() => res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };


 

  return (
    <AuthContext.Provider value={{ isAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};
