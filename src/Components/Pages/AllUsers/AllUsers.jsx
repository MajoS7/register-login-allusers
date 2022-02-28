
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Nav } from '../../UI/Nav/Nav'
import './AllUsers.css'

export const AllUsers = () => {
    const [AllU, setAllU]=useState([]);
    const UserAlls =()=>{
        axios.get('https://backend-edw.herokuapp.com/usuarios')
        .then(function (response) {
        setAllU(response.data);
         })
        .catch(function (error) {
        
        console.log(error);
        })
    }
    useEffect(() =>{
        UserAlls('')
    },[])
    
  return (
    <div className='imgAllUser'>
        <div className='overlay'>
            <div className='usersAll scroll'>
                {AllU.map(item=>(
                <div className='user'>
                    <p>{item[0]}</p>
                    <p>{item[1]}</p>
                    <p>{item[2]}</p>
                    <p>{item[3]}</p> 
                </div>         
                ))}
            </div>
            
            <Nav/>
            
        </div>
     </div>
  )
}
