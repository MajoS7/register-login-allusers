import React from 'react';
import './Buttom.css';

export const Buttom = ({prueba,userprueba,passawordprueba,emailprueba}) => {
    
  return (
    <div>
        <button type="submit" className='desingbottom' onClick={()=>prueba(userprueba,passawordprueba,emailprueba)}>Register</button>
    </div>
  )
}
