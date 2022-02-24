import React from 'react'
import { Nav } from '../../UI/Nav/Nav';
import './Login.css';
import { FormRegister } from '../../Layout/FormRegister/FormRegister';

export const Login = () => {
    return (
        <div className='imgHome'>
            <div className='overlay'>
              <FormRegister/>
              <Nav/>
              
            </div>
        </div>
      )
}
