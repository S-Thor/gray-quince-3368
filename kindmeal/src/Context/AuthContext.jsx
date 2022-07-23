import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState();
  const [coupons, setCoupons] = useState([]);

  console.log("USER:", user);

  useEffect(() => {
    axios
      .get(`https://json-server-project-masai.herokuapp.com/users`, {
        params: {
          isAuth: true,
        },
      })
      .then((res) => {
        console.log("RRR:", res);
        if (res.data[0] === undefined) {
          setIsAuth(() => false);
        } else {
          setUser(() => res.data[0]);
          setIsAuth(() => true);
          setCoupons(() => res.data[0].coupons);
        }
      });
  }, []);
  let id;

  const login = (data) => {
    axios
      .get(`https://json-server-project-masai.herokuapp.com/users`, {
        params: data,
      })
      .then((res) => {
        console.log("LOG:", res);
        if (res.data[0] == undefined) {
          alert("Wrong Passwod or UserName. Try Again");
          setIsAuth(() => false);
        } else {
          id = res.data[0].id;

          axios
            .patch(
              `https://json-server-project-masai.herokuapp.com/users/${id}`,
              { isAuth: true }
            )
            .then((res) => {
              console.log("AFTERLOG:", res);
              setIsAuth(() => res.data.isAuth);
              setUser(() => res.data);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  const logout = (id) => {
    axios
      .patch(`https://json-server-project-masai.herokuapp.com/users/${id}`, {
        isAuth: false,
      })
      .then((res) => {
        console.log("out:", res.data);
        setIsAuth(() => res.data.isAuth);
        setUser(() => res.data);
        setCoupons(() => []);
      })
      .catch((err) => console.log(err));
  };

  const addCoup = (coup, dish) => {
    console.log("COUPON:", coup);
    axios
      .patch(
        `https://json-server-project-masai.herokuapp.com/users/${user.id}`,
        { coupons: [...coup, dish] }
      )
      .then((res) => {
        console.log("ADDCOUP-RES:", res);
        setUser(() => res.data);
        setCoupons(() => res.data.coupons);
        alert("Coupon Added. Check it in your Coupons");
      })
      .catch((err) => console.log(err))
  };

  const redeem = (id) => {
    console.log("C1:", coupons);
    let newCoup = coupons.filter((coup) => id !== coup.id);
    setCoupons(() => newCoup);
    alert("Your Coupons is Redeemed.");
    axios
      .patch(
        `https://json-server-project-masai.herokuapp.com/users/${user.id}`,
        { coupons: newCoup }
      )
      .then((res) => {
        console.log("REDEEM-RES:", res);
        setUser(() => res.data);
      })
      .catch((err) => console.log(err))
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, user, login, logout, addCoup, coupons, redeem }}
    >
      {children}
    </AuthContext.Provider>
  );
};
