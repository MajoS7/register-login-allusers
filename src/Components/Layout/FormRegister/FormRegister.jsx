import React, { useState } from 'react'
import axios from 'axios';
import './FormRegister.css';

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
        <input type="text" className='textBox' placeholder='Username' onKeyUp={event=>setUserName(event.target.value)} />
        <input type="email" className='textBox' placeholder='Email' onKeyUp={event=>setEmail(event.target.value)}/>
        <input type="password" className='textBox' placeholder='Passaword' onKeyUp={event=>setPassaword(event.target.value)}/>
        <button type="submit" className='desingbottom' onClick={()=>registerForm(userName,email,passaword)}>Register</button>
    </div>
  )
  
}
