import React, {useState} from 'react';
import {auth, db} from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, setDoc, doc } from "firebase/firestore";

function Signup() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  async function processSignup() { 
    try{
      setLoader(true);
    let userCred = await createUserWithEmailAndPassword(auth, email, password);
    // console.log(userCred.user);
    await setDoc(doc(db, "users", userCred.user.uid), {
      email,
      name,
      reelsIds: [],
      profileImgUrl: "",
      userId: userCred.user.uid
    });

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

  return (
    <>
    {
      error != null ? <h1>Error is {error}</h1> :
      loader == true ? <h1>Loading...</h1> : 
      user != null ? <h1>Signed up user is {user.uid}</h1> :
      <>
      <input type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} placeholder="email" ></input>
      <br></br>
      <input type="password" onChange={(e) => {setPassword(e.target.value)}} value={password} placeholder="password"></input>
      <br></br>
      <input type="text" onChange={(e) => {setName(e.target.value)}} value={name} placeholder="Full Name"></input>
      <br></br>
      <button type="click" onClick={processSignup}>Signup</button>
    </>
    }
    </>
    
  )
}

export default Signup