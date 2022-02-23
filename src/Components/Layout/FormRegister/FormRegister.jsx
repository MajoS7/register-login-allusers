import React, { useState } from 'react'
import axios from 'axios';
import './FormRegister.css';
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

export const FormRegister = () => {
  const [userName, setUserName]=useState("");
  const [email, setEmail]=useState("");
  const [passaword, setPassaword]=useState("");


  const registerForm=(userName,email,passaword)=>{
    axios.post('https://backend-edw.herokuapp.com/usuario', {
      username:email,
      password:passaword,
      name:userName
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className='formBackgroundRegister'>
        <h1>Register</h1>
        <div className='iconText'>
          <BiUser/>
          <input type="text" className='textBox' placeholder='Username' onKeyUp={event=>setUserName(event.target.value)} /></div>
        <div className='iconText'>
          <HiOutlineMail/>
          <input type="email" className='textBox' placeholder='Email' onKeyUp={event=>setEmail(event.target.value)}/>
        </div>
        <div className='iconText'>
          <RiLockPasswordLine/>
          <input type="password" className='textBox' placeholder='Passaword' onKeyUp={event=>setPassaword(event.target.value)}/>
        </div>
        <button type="submit" className='desingbottom' onClick={()=>registerForm(userName,email,passaword)}>Register</button>
    </div>
  )
  
}
