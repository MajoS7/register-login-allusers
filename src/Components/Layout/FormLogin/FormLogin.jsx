import React, { useState } from 'react';
import axios from 'axios';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Buttom } from '../../UI/Buttom/Buttom';

export const FormLogin = () => {
    const [email, setEmail]=useState("");
    const [passaword, setPassaword]=useState("");

    const LoginForm=(userName,email,passaword)=>{
        axios.post('https://backend-edw.herokuapp.com/login', {
        username:email,
        password:passaword,
        
        })
        .then(function (response) {
        if (response.data.Message=="Credenciales Invalidas"){
           alert(response.data.Message) 
        }
        else{
            alert("Usuario log")
        }
        
        })
        .catch(function (error) {
        console.log(error);
        });
    }

  return (
    <div className='formBackgroundRegister'>
        <h1>Login</h1>
        <div className='iconText'>
          <HiOutlineMail/>
          <input type="email" className='textBox' placeholder='Email' onKeyUp={event=>setEmail(event.target.value)}/>
        </div>
        <div className='iconText'>
          <RiLockPasswordLine/>
          <input type="password" className='textBox' placeholder='Passaword' onKeyUp={event=>setPassaword(event.target.value)}/>
        </div>
        <Buttom form={LoginForm}  passwoord={passaword} emaill={email} title="Login"/>
    </div>
  )
}
