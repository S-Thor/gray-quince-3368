import React from "react";
import Footer from "../components/JSX/Footer";
import Heading from "../components/JSX/Heading";
import LoginForm from "../components/JSX/LoginForm";
import Navbar from "../components/JSX/Navbar";

const Login = () => {
  return (
    <div>
      <Heading />
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
