import React, { useState } from 'react';
import axios from 'axios';
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Buttom } from '../../UI/Buttom/Buttom';

export const FormLogin = () => {
    const [userName, setUserName]=useState("");
    const [passaword, setPassaword]=useState("");

    const LoginForm=(userName,email,passaword)=>{
        
        console.log(userName,email,passaword)
    }

  return (
    <div className='formBackgroundRegister'>
        <h1>Login</h1>
        <div className="iconText">
          <BiUser/>
          <input type="text" className='textBox' placeholder="Username" onKeyUp={event=>setUserName(event.target.value)} />
        </div>
        <div className='iconText'>
          <RiLockPasswordLine/>
          <input type="password" className='textBox' placeholder='Passaword' onKeyUp={event=>setPassaword(event.target.value)}/>
        </div>
        <Buttom form={LoginForm} nameUser={userName} passwoord={passaword} title="Login"/>
    </div>
  )
}
