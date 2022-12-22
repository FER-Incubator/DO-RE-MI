import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/back.css';

function Izvodaci(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div>
            <div className='bottomNav'>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-2-obiljezja' ><button className='kreni-btn next-btn'>&#171; Lekcija 2: Obilježja</button></Link></a>
            <button className='stil-tekst lekcija-btn'>Lekcija 3: Izvođači</button>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-4-note' ><button className='kreni-btn next-btn'>Lekcija 4: Note &#187;</button></Link></a>
            </div>
        </div>
    )
}
export default Izvodaci;