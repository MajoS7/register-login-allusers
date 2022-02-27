import React from 'react'
import { Nav } from '../../UI/Nav/Nav';
import './Login.css';
import {FormLogin} from '../../Layout/FormLogin/FormLogin'

export const Login = () => {
    return (
        <div className='imgHome'>
            <div className='overlay'>
              <Nav/>
              <FormLogin/>
            </div>
        </div>
      )
}
