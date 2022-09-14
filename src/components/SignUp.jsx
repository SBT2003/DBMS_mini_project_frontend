import React from "react";
import { useState } from "react";
// import {useHistory} from 'react-router-dom';

export default function () {
  // const history=useHistory();
  const [user,setuser]=useState({
    username:"",
    email:"",
    password:""
  });

  //handle input
  const handleInput=(event)=>{
      let name=event.target.name;
      let value=event.target.value;

      setuser({...user,[name]:value});
  }

  //handle submit
  const handleSubmit=async (event)=>{
      event.preventDefault();

      //object destructuring and storing object data in variables
      const{username,email,password}=user;
      try {

        //it is submitted on port which frontend is using but we want it at port 
        //where backend is there thus, we need a proxy
        const res=await fetch('/SignUp',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({username,email,password})
        })
        if(res.status===400 || !res)
        {
          window.alert("User already exists!");
        }
        else{
          window.alert("signed up successfully!");
          // history.pushState('/login')
        }
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <div>
      <h1>Sign up page</h1>
      
        
        <form onSubmit={handleSubmit} method="POST">
          

          <label htmlfor="username">Username</label>
          <input type="text" 
          placeholder="username" 
          id="username" 
          name="username" 
          value={user.username}
          onChange={handleInput}
          ></input>

          <label htmlfor="email">E-mail</label>
          <input type="email" placeholder="email" id="email"
          name="email" 
          value={user.email}
          onChange={handleInput}
          ></input>

          <label htmlfor="password">Password</label>
          <input type="password" placeholder="Password" id="password"
          name="password" 
          value={user.password}
          onChange={handleInput}
          ></input>

          
          <button id="signup-btn" type="submit" >
             Sign up
          </button>
          

        </form>
      
    </div>
  );
}
