import React from 'react'
import { useState } from 'react';


export default function AboutUs() {
  const [msg,setMsg]=useState({
    name:"",
    email:"",
    message:""
  });

  //handle input
  const handleChange=(event)=>{
    let name=event.target.name;
    let value=event.target.value;

    setMsg({...msg,[name]:value});
}

//handle submit
const handleSubmit=async (event)=>{
  event.preventDefault();

  //object destructuring and storing object data in variable
  const{name,email,message}=msg;
  try {

    //it is submitted on port which frontend is using but we want it at port 
    //where backend is there thus, we need a proxy
    const res=await fetch('/message',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,message})
    })
    if(res.status===400 || !res)
    {
      window.alert("Message not sent!");
    }
    else{
      window.alert("Message sent successfully!");
      setMsg({
        name:"",
    email:"",
    message:""
      })
    }
  } catch (error) {
    console.log(error);
  }
}


  return (
    <>
    <div>AboutUs</div>
    <form onSubmit={handleSubmit} method='POST'>
    <label htmlfor="name">Username</label>
          <input type="text" 
          placeholder="name" 
          id="name" 
          name="name" 
          value={msg.name}
          onChange={handleChange}
          ></input>

          <label htmlfor="email">E-mail</label>
          <input type="email" placeholder="email" id="email"
          name="email" 
          value={msg.email}
          onChange={handleChange}
          ></input>
    <label htmlfor="message">Message</label>
          <textarea
           placeholder="message" 
           id="message"
           name="message"
           value={msg.password}
           onChange={handleChange}
           ></textarea>

    <button type='submit'>Send</button>
           </form>
    </>
  )
}
