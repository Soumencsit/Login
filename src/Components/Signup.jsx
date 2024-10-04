
//-------------------------------------------------------------------------------------------------------------------


import React, { useState } from 'react';
import './Signup.css'
import facebook from "../images/facebook.png"
import apple from "../images/apple-logo.png"
import google from '../images/google.png'

import paypal from '../images/paypal.png'

const UbuyLoginForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [passwordInputType, setPasswordInputType] = useState('password');
  const [otp, setOTP] = useState('');
  const [toggleOTP, setToggleOTP] = useState('Password');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="container">
      <h1 className="title">WELCOME TO UBUY</h1>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'login' ? 'activeTab' : ''}`}
          onClick={() => setActiveTab('login')}
        >
          Log In
        </button>
        <button
          className={`tab ${activeTab === 'signup' ? 'activeTab' : ''}`}
          onClick={() => setActiveTab('signup')}
        >
          Sign up
        </button>
      </div>
      <input type="email" placeholder="Email Address *" className="input" />

      {activeTab === 'login' ? (
        <div className="loginContainer">
          <div className="logintabs">
            <button
              className={`login ${toggleOTP === 'Password' ? 'active' : ''}`}
              onClick={() => setToggleOTP('Password')}
            >
              Password
            </button>
            <button
              className={`login ${toggleOTP === 'OTP' ? 'active' : ''}`}
              onClick={() => setToggleOTP('OTP')}
            >
              OTP
            </button>
          </div>

          <div className="passwordInput">
            <input
              type={passwordInputType}
              placeholder={toggleOTP}
              className="passinput"
            />
          </div>
         
        </div>

       

        
      ) : 
      
      
      
      (
        <div className="signupContainer">
    

          <div className="passwordInput">
            <input
              type={passwordInputType}
              placeholder='Password *'
              className="password"
            />
          </div>

          <div className="confirmPasswordInput">
          <input
              type={passwordInputType}
              placeholder='Confirm Password *'
              className="password"
            />
          </div>
        </div>
      )}

      {activeTab === 'login' && (
        <div className="forgotPassword">
          <a href="#">Forgot Your Password?</a>
        </div>
      )}
      <button className="loginButton">{activeTab === 'login' ? 'Log In' : 'Sign Up'}</button>
      <div className="socialLogin">
        <img src={google}alt="Google" className="socialIcon" />
       
        <img
          src={facebook}
          alt="Facebook"
          className="socialIcon"
        />
        <img src={apple} alt="Apple" className="socialIcon" />
        <img
          src={paypal}
        
          className="socialIcon"
        />
        <span className="socialText">
        {activeTab} with Social Accounts</span>
      </div>
    </div>
  );
};

export default UbuyLoginForm;