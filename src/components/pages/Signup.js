
import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard'
import './Signup.css';
import fire from '../signup/firebase.js';
import Login from '../signup/login';

export default function Signup() {
  const [user , setUser] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [emailError , setEmailError] = useState('');
  const [passwordError , setPasswordError] = useState('');
  const [hasAccount , setHasAccount] = useState(false);


  const clearInput = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }


  const handLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-not-found":
        case "auth/user-disabled":
          setEmailError(error.message);
          break;
        case "auth/invalid-password":
          setPasswordError(error.message);
          break;
      }
    })
  }

  const handleSignup = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/email-in-use":
        
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
      }
    })
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) =>{
      if(user){
        clearInput();
        setUser(user);
      }else{
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div className="App">
      {user ? (
          <Dashboard handleLogout={handleLogout} />
      ):(
        <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handLogin = {handLogin}
        handleSignup = {handleSignup}
        hasAccount = {hasAccount}
        sethasAccount = {setHasAccount}
        emailError = {emailError}
        passwordError = {passwordError}
      
      />
      )}
     
      
    </div>
  );
}
