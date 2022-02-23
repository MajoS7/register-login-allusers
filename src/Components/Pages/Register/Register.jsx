import React from 'react'
import { FormRegister } from '../../Layout/FormRegister/FormRegister';
import './Register.css';


export const Register = () => {
  return (
    <div className='imgBackground'>
        <div className='overlay'>
            <FormRegister/>
        </div>
    </div>
  )
}
