import React, { useState, useEffect } from 'react';
import {auth} from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  // const [mainloader, setMainloader] = useState(true);

  const cEmail = (e) => {
    setEmail(e.target.value)
  }

  const cPassword = (e) => {
    setPassword(e.target.value)
  }

  const printDetails = async function () {
    try{
      setLoader(true);
    let userCred = await signInWithEmailAndPassword(auth, email, password);
    // console.log(userCred.user);
    setUser(userCred.user);
    }
    catch(err){
      setError(err.message);

      setTimeout(() => {
        setError(null);
      }, 5000);

    }
    setLoader(false);
  }

  const signout = async function () {
    // await signOut(auth);
    setUser(null);
  }

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {

      if(user){
        setUser(user);
      }else{
        setUser(null);
      }
      // setMainloader(false);

    })

  }, [])

  return (
    <>
      {
      // mainloader == true ? <h1>Page Loading...</h1> :
      error != null ? <h1>Error is {error}</h1> :
      loader == true ? <h1>Loading...</h1> : 
      user != null ? <><h1>user is {user.uid}</h1> <button onClick={signout}>Signout</button></>: 
      <>
      <input type="email" value={email} onChange={cEmail} placeholder='email'></input>
      <br></br>
      <input type="password" value={password} onChange={cPassword} placeholder='password'></input>
      <br></br>
      <button type="click" onClick={printDetails}>Login</button>
    </>
    }
    </>
  )
}

export default Login