import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/back.css';

function Zvukovi(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div>
            <div className='bottomNav'>
            <a onClick={scrollToTop}><Link to='/ucionica' ><button className='kreni-btn next-btn back-btn'>&#171; Povratak: Učionica</button></Link></a>
            <button className='stil-tekst lekcija-btn'>Lekcija 1: Zvukovi</button>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-2-obiljezja' ><button className='kreni-btn next-btn'>Lekcija 2: Obilježja &#187;</button></Link></a>
            </div>
        </div>
    )
}
export default Zvukovi;