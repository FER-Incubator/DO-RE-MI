import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/back.css';

function Pjesme(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div>
            <div className='bottomNav back-gray'>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-4-note' ><button className='kreni-btn next-btn'>&#171; Lekcija 4: Note</button></Link></a>
            <button className='stil-tekst lekcija-btn'>Lekcija 5: Pjesme</button>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-6-povijest' ><button className='kreni-btn next-btn'>Lekcija 6: Povijest &#187;</button></Link></a>
            </div>
        </div>
    )
}
export default Pjesme;