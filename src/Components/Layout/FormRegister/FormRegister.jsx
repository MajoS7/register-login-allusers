import React, { useState } from 'react'
import axios from 'axios';
import './FormRegister.css';
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Buttom } from '../../UI/Buttom/Buttom';



export const FormRegister = ({mensaje}) => {
  const [userName, setUserName]=useState("");
  const [email, setEmail]=useState("");
  const [passaword, setPassaword]=useState("");
  


  const registerForm=(userName,email,passaword)=>{
    // axios.post('https://backend-edw.herokuapp.com/usuario', {
    //   username:email,
    //   password:passaword,
    //   name:userName
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    console.log(userName,email,passaword)
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
        <Buttom prueba={registerForm} userprueba={userName} passawordprueba={passaword} emailprueba={email} />
    </div>
  )
  
}
