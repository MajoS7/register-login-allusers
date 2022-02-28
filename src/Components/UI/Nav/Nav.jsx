import React from 'react'
import { GiFlowerHat } from "react-icons/gi";
import { BiRegistered } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import './Nav.css';
import { NavLink } from 'react-router-dom';


export const Nav = () => {
  return (
    <div className='navc'>
       <NavLink to='/' className='navbuttom'><a><GiFlowerHat/></a></NavLink>
       <NavLink to='/Register' className='navbuttom'><a ><BiRegistered/></a></NavLink>   
       <NavLink to='/AllUsers' className='navbuttom'><a ><FaUsers/></a></NavLink>
    </div>
  )
}
