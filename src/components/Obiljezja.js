import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/back.css';

function Obiljezja(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div>
            <div className='bottomNav'>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-1-zvukovi' ><button className='kreni-btn next-btn'>&#171; Lekcija 1: Zvukovi</button></Link></a>
            <button className='stil-tekst lekcija-btn'>Lekcija 2: Obilježja</button>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-3-izvodaci' ><button className='kreni-btn next-btn'>Lekcija 3: Izvođači &#187;</button></Link></a>
            </div>
        </div>
    )
}
export default Obiljezja;