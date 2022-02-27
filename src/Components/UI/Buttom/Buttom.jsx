import React from 'react';
import './Buttom.css';

export const Buttom = ({form,nameUser,passwoord,emaill,title}) => {
    
  return (
    <div>
        <button type="submit" className='desingbottom' onClick={()=>form(nameUser,emaill,passwoord)}>{title}</button>
    </div>
  )
}
