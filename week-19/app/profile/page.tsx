'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [profile, setProfile] = useState();
    
    useEffect(()=>{
        axios.get('http://localhost:3000/api/profile', {
           headers:{
            authorization: localStorage.getItem('token')
           }
        }).then((res)=>{
            setProfile(res.data.url);
        })
    },[])
  return (
    <div>URL:{profile}</div>
  )
}

export default Page