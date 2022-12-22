import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/back.css';

function Note(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div>
            <div className='bottomNav'>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-3-izvodaci' ><button className='kreni-btn next-btn'>&#171; Lekcija 3: Izvođači</button></Link></a>
            <button className='stil-tekst lekcija-btn'>Lekcija 4: Note</button>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-5-pjesme' ><button className='kreni-btn next-btn'>Lekcija 5: Pjesme &#187;</button></Link></a>
            </div>
        </div>
    )
}
export default Note;