import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {FaChartBar} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    return (
        <div style={{display:'flex', justifyContent:'center',  gap:40, fontSize:9 }}>
        <Link to='/'>
            <div className='navbar'>
                <FaCoins className='icon' />
                <h1> Sira <span className='purple'>CryptoInfo</span></h1>
            </div>
        </Link>
        <Link to='/tradingview'>
            <div className='navbar'>
                <FaChartBar className='icon' />
                <h1> Trading <span className='purple'>View</span></h1>
            </div>
        </Link>
        </div>
    )
}

export default Navbar