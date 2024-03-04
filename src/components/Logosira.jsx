import React from 'react'
import siralogo from '../asset/siralogo.png'
import './Logosira.css'
import { Link } from 'react-router-dom'
function Logosira() {
  return (
    <div className='logocontainer'>
        <Link to='/'>
        <img src={siralogo} alt="sira" className='logo'/>
        </Link>
  
    </div>
  )
}

export default Logosira
