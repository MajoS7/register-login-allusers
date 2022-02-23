import React from 'react'
import { GiFlowerHat } from "react-icons/gi";
import './Nav.css';

// const buttomsnav =()=>{
//     const prueba = document.querySelector('#prueba');
//     const registerButtom = document.createElement('div');
//     const logButtom = document.createElement('div');
//     const allUsersButtom = document.createElement('div');
//     const icono =document.createElement('GiFlowerHat');

//     registerButtom.classList.add('navbuttom');
//     logButtom.classList.add('navbuttom');
//     allUsersButtom.classList.add('navbuttom');

//     registerButtom.appendChild(icono);
//     logButtom.appendChild(icono);
//     allUsersButtom.appendChild(icono);

//     prueba.appendChild(registerButtom);
//     prueba.appendChild(logButtom);
//     prueba.appendChild(allUsersButtom);

// }

export const Nav = () => {
  return (
    <div className='navbuttom'>
        <GiFlowerHat/>
    </div>
  )
}
