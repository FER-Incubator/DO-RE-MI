import React from 'react';
import {Link, useLocation } from "react-router-dom";
import './Header.css'
import logo from '../images/logorobot.png'; //za sliku staviti
import logo2 from '../images/logorobot2.png'; //za sliku staviti
import naslov from '../images/naslov.png';

function Header(props) {
    const pathname = useLocation().pathname;

    return (
    <header>
        <div className='naslov'>
          <img className='note' src={logo}></img>
          <Link to='/' className='naslovni'><img className='naslovni-text' src={naslov}></img></Link>
          <img className='note' src={logo2}></img>
        </div>
        <div>
          <ul>
            <li><Link className= {`${pathname === '/' ? 'poveznica-active' : 'poveznica'}`} to='/'>Početna</Link></li>
            <li><Link className= {`${pathname === '/ucionica' ? 'poveznica-active' : 'poveznica'}`} to='/ucionica'>Učionica</Link></li>
            <li><Link className= {`${pathname === '/kviz' ? 'poveznica-active' : 'poveznica'}`} to='/kviz'>Kviz</Link></li>
            <li><Link className= {`${pathname === '/igraonica' ? 'poveznica-active' : 'poveznica'}`} to='/igraonica'>Igraonica</Link></li>
          </ul>
        </div>  
    </header>
  )
}

export default Header;
