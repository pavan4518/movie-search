import React from 'react'
import {Link} from 'react-router-dom'
import user from '../images/useri.png'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <Link to="/">
        <div className='logo'>Movie App </div></Link>
        
            <div className='user-image'>
                <img src={user} alt='User'/>
            </div>
       
    </div>
  )
}
