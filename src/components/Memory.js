import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Fun.css';
import '../design/back.css';
import '../design/Memory.css';

import Cards from "./Cards";


function Memory(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    function refreshPage(){
        window.location.reload(false);
    }

    return(
        <div className="glavnidiv">
             <h3 className='stil-tekst'>Upute</h3>
            <p className="stil-tekst uputstva-memory"><i>Pritiskom na bijeli kvadrat otvara se sličica.</i><br></br>
                <i>Tvoj zadatak je otvoriti dvije sličice i pokušati pronaći dvije jednake sličice odnosno par.</i><br></br>
                <i>Igra završava kada povežeš sve parove sličica.</i>
                </p>
            <div className="naslovnidiv">
                <h1>Glazbeni Memory</h1>
            </div>

            <Cards></Cards>

            <div className="ponovo_btn_div">
                <button className="ponovo_btn" onClick={refreshPage}>Igraj ponovo</button>
            </div>

           

            <a onClick={scrollToTop}><Link to='/igraonica' ><button className='kreni-btn next-btn'>&#171; Povratak: Igraonica</button></Link></a>

        </div>
    )
}
export default Memory;