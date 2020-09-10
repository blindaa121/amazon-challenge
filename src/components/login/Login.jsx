import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { db, auth } from '../../firebase'
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    //   history.push('/')
                }
            })
            .catch(err => alert(err.message))
    }

    const register = (e) => {
        e.preventDefault();
        auth   
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    // history.push("/");
                }
            })
            .catch(err => alert(err.message))
    }

    return (
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg"
          />
        </Link>

        <div className="login__container">
          <h1>Sign-in</h1>

          <form action="">
            <h5>Email</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
            >
              Sign In
            </button>
          </form>
          <p className="login_terms">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>
        
        <div className="login__newAccount">
            
            <button onClick={register} className="login__registerButton">
                Create Your Amazon Account
            </button>
        </div>

        
      </div>
    );
}

export default Login
