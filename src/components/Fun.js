import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Fun.css';
import '../design/back.css';
import MI from '../images/MI.png';
import note from '../images/note.png';


function Fun(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div className='stil-tekst'>
            <div className='mi-div back-yellow'>
            <img className='' src={MI} width='270px'></img>
                <p className='poruke-mi'>
                    <h2 className='color-pink'>Juhuuuu! Obožavam igru i zabavu.</h2>
                    <h4>Želiš li se i ti zabaviti?</h4>
                    <h4>Ukoliko je odgovor da, onda nema čekanja -neka zabava započne !</h4>
                </p>
            </div>
            
            <div className='igre-div back-red'>
                <p>Na raspolaganju su ti dvije zabavne, ali i vrlo edukativne igre.</p>
                <p><i>Pritiskom na pojedini gumb započinje igra.</i></p>
                <div className='igre-btn'>
                    <a onClick={scrollToTop} className='btn-game'><Link to='/igraonica/memory'><button className='btn-fun memori'><b>Igra Memory</b></button></Link></a>
                    <a onClick={scrollToTop} className='btn-game'><Link to='/igraonica/klavijatura'><button className='btn-fun klavir'><b>Klavijatura</b></button></Link></a>
                </div>
            </div>
            
        </div>
    )
}
export default Fun;