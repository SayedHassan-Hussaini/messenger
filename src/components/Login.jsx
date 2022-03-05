import React from "react";
import { Icon } from "@iconify/react";
import style from "./style.module.css";
 import firebase from 'firebase/compat/app'
 import { auth } from "../firebase";

const Login = () => {
  return (
    <div className={`${style.login}`}>
        <button
          className={`${style.btnGoogle} mt-4`}
          type="button"
          onClick={()=> firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
          // disabled={renderProps.disabled}
        >
          <Icon className={style.googleIcon} icon="flat-color-icons:google" />
          Login with Google
        </button>
        <br/>
        {/* <button
          className={`${style.btnGoogle} mt-4`}
          type="button"
          onClick={()=> firebase.auth().signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
          // disabled={renderProps.disabled}
        >
          <Icon className={style.googleIcon} icon="logos:facebook" />
          Login with Facebook
        </button> */}
    </div>
  );
};
export default Login;
