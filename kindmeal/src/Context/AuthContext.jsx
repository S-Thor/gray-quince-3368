import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [toggleAuth, setToggleAuth] = useState(false);
  const [user, setUser] = useState();
  console.log("USER:",user);
  let id;

  const login = (data) => {
    axios
      .get(`http://localhost:8080/users`, {
        params: data,
      })
      .then((res) => {
        id = res.data[0].id;
        if (id !== undefined) {
          axios
            .patch(`http://localhost:8080/users/${id}`, { isAuth: true })
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  const logout = (id) => {
    axios.patch(`http://localhost:8080/users/${id}`,{isAuth: false})
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
  }

  return (
    <AuthContext.Provider value={{ user, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
