"use client"
import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return <div>
    <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={async()=>{
      const reaponse = await axios.post('"secret"api/auth/signin', {
        email,
        password
    })
    localStorage.setItem('token', reaponse.data.token);
    }}>SignIn</button>
  </div>;
};

export default SignIn;
