import React from "react";
import { useState } from "react";

export default function () {

  const [user,setUser]=useState({
    email:'',
    password:''
  });

  const handleChange=(event)=>{
    let name=event.target.name;
    let value=event.target.value;

    setUser({...user, [name]:value});

  };

  const handleSubmit=async (event)=>{
    event.preventDefault();
    const {email,password}=user;

    try {

      
      const res=await fetch('/login',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
      })
      if(res.status===400 || !res)
      {
        window.alert("Invalid Credentials!");
      }
      else{
        window.alert("Logged in successfully!");
        window.location.reload();
        // history.pushState('/login')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Log in page</h1>
      
      
        
        <form onSubmit={handleSubmit}>
          <h3>Login Here</h3>

          <label htmlfor="email">E-mail</label>
          <input
           type="email"
           placeholder="email" 
           id="email"
           name="email"
           value={user.email}
           onChange={handleChange}
           ></input>

          <label htmlfor="password">Password</label>
          <input
           type="password" 
           placeholder="Password" 
           id="password"
           name="password"
           value={user.password}
           onChange={handleChange}
           ></input>

          <button id="login-btn" type="submit" >
            Log In
          </button>
          

        </form>
      
    </div>
  );
}
