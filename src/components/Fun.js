import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Fun.css';
import '../design/back.css';
import DO from '../images/DOups.png';
import cone from '../images/cone.png';
import logo from '../images/logorobot.png';
import logo2 from '../images/logorobot2.png';

function Fun(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div className=''>
            <div className='containerUps'>
                <img src={cone} className='ups-slika'></img>
                <div className='pozdravUps'>
                    <img className='robotUps' src={DO}></img>
                    <text className='porukaUps'><b>Upsssssss....!</b><br></br> 
                     Podstranica "Igraonica" trenutno nije dostupna.<br></br> 
                     No ne brini nudimo ti pregršt zanimljivog i zabavnog sadržaja za istraživanje na podstranici "Učionica".
                    </text>
                </div>
                <img src={cone} className='ups-slika'></img>
            </div>
            <a onClick={scrollToTop} className='center-btn'><Link to='/ucionica'><button className='kreni-btn btn-ups'>&#171; Povratak: Učionica</button></Link></a>
            <a onClick={scrollToTop} className='center-btn'><Link to='/igraonica/memory'><button className='kreni-btn btn-ups'>Igra Memory</button></Link></a>
        </div>
    )
}
export default Fun;