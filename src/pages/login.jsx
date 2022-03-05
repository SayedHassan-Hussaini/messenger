import React from "react";
import LoginPage from "../components/Login";
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>messange | login</title>
      </Helmet>
      <LoginPage />
    </>
  );
};
export default Login;
