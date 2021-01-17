import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import paaila from '../../assets/paaila.png';
import {useStateValue} from '../../StateProvider';
import * as api from '../../api/index';



function Login() {
    const history = useHistory();
    const [state, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signIn() {
        // e.preventDefault();
        fetch('https://paailanews.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body:JSON.stringify(email, password)
         }).then( (response) => {
            response.json().then((result) => {
                console.warn(result)
            })
        })
     
    }

    return (
        <div className='login'>
       
                <img
                    className="login__logo"
                    src={paaila}
                    alt='paaila' 
                />
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={ (e)=> setPassword(e.target.value)} />

                    <button onClick={signIn()} type='submit' className='login__signInButton'>Sign In</button>
                </form>


            </div>
        </div>
    )
}

export default Login