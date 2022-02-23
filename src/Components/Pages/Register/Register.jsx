import React from 'react'
import { FormRegister } from '../../Layout/FormRegister/FormRegister';
import { Nav } from '../../UI/Nav/Nav';
import './Register.css';



export const Register = () => {
  return (
    <div className='imgBackground'>
        <div className='overlay'>
            <FormRegister/>
            <Nav/>
        </div>
    </div>
  )
}
