"use client"
import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return <div>
    <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={async()=>{

    }}>SignIn</button>
  </div>;
};

export default SignIn;
