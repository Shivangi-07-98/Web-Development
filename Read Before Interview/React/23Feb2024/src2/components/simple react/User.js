import React from 'react'
import { useState, useEffect } from 'react'

function User() {
    let [loading, setLoading] = useState(true);
    let [user, setUser] = useState("");

    useEffect(function fn() {
        (async function(){
            let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            let data = await response.json();
            setUser(data);
            setLoading(false);
        })()
    })

  return (
    <>
    <h1>User</h1>
    {loading == true ? <div>Loading...</div>:
    <h2>{user.name}</h2>
    }
    </>
  )
}

export default User