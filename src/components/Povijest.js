import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/back.css';

function Povijest(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div>
            <div className='bottomNav'>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-5-pjesme' ><button className='kreni-btn next-btn'>&#171; Lekcija 5: Pjesme</button></Link></a>
            <button className='stil-tekst lekcija-btn'>Lekcija 6: Povijest</button>
            <a onClick={scrollToTop}><Link to='/kviz' ><button className='kreni-btn next-btn end-btn'>Kraj: Kviz &#187;</button></Link></a>
            </div>
        </div>
    )
}
export default Povijest;