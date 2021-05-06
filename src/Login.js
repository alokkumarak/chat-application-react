import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css';
import { useStateValue } from './StateProvider';
import {auth,provider} from "./firebase"
import { actionTypes } from './reducer';


function Login() {
    const [{},dispatch]=useStateValue();

    const SignIn=()=>{
         auth.signInWithPopup(provider)
         .then((result)=>{
             dispatch({
                 type:actionTypes.SET_USER,
                 user:result.user,
             })
         }).catch((error)=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__container">
                <img className="login__logo" src="http://www.clker.com/cliparts/J/d/c/S/q/k/whatsapp-trans-rev1.svg" alt="" />
                <div className="login__text">
                   <Button onClick={SignIn}>
                     Sign in with Google
                   </Button>
                </div>
                

            </div>
        </div>
    )
}

export default Login
