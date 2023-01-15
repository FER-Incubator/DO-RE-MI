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
            <div className="naslovnidiv">
                <h1>Glazbeni Memory</h1>
            </div>

            <Cards></Cards>

            <div className="ponovo_btn_div">
                <button className="ponovo_btn" onClick={refreshPage}>Igraj ponovo</button>
            </div>



        </div>
    )
}
export default Memory;