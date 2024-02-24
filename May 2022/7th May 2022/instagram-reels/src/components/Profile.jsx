import React, { useEffect, useState } from 'react'
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase";
import "./profile.css";
import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

function Profile() {
  // use case  -> to give me uid
  // let cUser = useContext(AuthContext);
  // let [user, setUser] = useState();
  // let [pageLoading, setPageLoading] = useState(true);

  // useEffect(function fun() {
  //   (async function () {
  //     const docRef = doc(db, "users", cUser.uid);
  //     const userObj = await getDoc(docRef);
  //     console.log("Document data:", userObj.data());
  //     setUser(userObj.data());
  //     setPageLoading(false);
  //   })()
  // }, []);

  return (
    <>
{/* 
      {pageLoading == true ?
        <div>Loading...</div> : */}
        <>

          <div className="header"></div>

          <div className="main">
            <div className="pimg_container"><img className="pimg" /></div>

            <div className="details">
              <div className="content">Shivangi</div>
              <div className="content">No. of Posts: <span className="bold_text">Posts</span></div>
              <div className="content">email: <span className="bold_text">abc@gmail.com</span></div>
            </div> 

          </div>
          
        </>
      {/* } */}

    </>
  )
}
export default Profile