import React from "react";
import { Icon } from "@iconify/react";
import style from "./style.module.css";
import { Card } from "react-bootstrap";

const Login = () => {
  return (
    <div className={`${style.login}`}>
        <button
          className={`${style.btnGoogle} mt-4`}
          type="button"
          // onClick={renderProps.onClick}
          // disabled={renderProps.disabled}
        >
          <Icon className={style.googleIcon} icon="flat-color-icons:google" />
          Login with Google
        </button>
        <br/>
        <button
          className={`${style.btnGoogle} mt-4`}
          type="button"
          // onClick={renderProps.onClick}
          // disabled={renderProps.disabled}
        >
          <Icon className={style.googleIcon} icon="logos:facebook" />
          Login with Google
        </button>
    </div>
  );
};
export default Login;
