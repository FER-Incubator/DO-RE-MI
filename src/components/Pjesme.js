import React ,{useState, useRef} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/back.css';
import '../design/Pjesme.css';
import play from '../images/play.png';
import pause from '../images/pause.png';
import sing from '../images/mic.png';
import down from '../images/down.png';
import MI from '../images/MI.png';
import bratecMartin from '../video/bratec.mp4';
import Muhara from '../video/muhara.mp4';
import HOKIPOKI from '../video/hokipoki.mp4';
import kadSe from '../video/kadsemale.mp4';
import tekstBratec from '../tekstovi/BratecMartin.pdf';
import tekstMuhara from '../tekstovi/Muhara.pdf';
import tekstHokiPoki from '../tekstovi/HOKIPOKI.pdf';
import tekstKadse from '../tekstovi/Kadsemalerukesloze.pdf';

function Pjesme(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    const bratec = useRef();
    const muh = useRef();
    const hoki = useRef();
    const kad = useRef();

    const handleBratecStart = () => {
        bratec.current.play();
     }
 
     const handleBratecPause = () => {
         bratec.current.pause();
     }
     const handleMuharaStart = () => {
        muh.current.play();
     }
 
     const handleMuharaPause = () => {
         muh.current.pause();
     }
     const handleHOKIPOKIStart = () => {
        hoki.current.play();
     }
 
     const handleHOKIPOKIPause = () => {
         hoki.current.pause();
     }
     const handleKadStart = () => {
        kad.current.play();
     }
 
     const handleKadPause = () => {
         kad.current.pause();
     }

    return(
        <div className='back-yellow stil-tekst'>
            <div className='naslov-lekcija back-blue'>
                <h2 className='stil-tekst'>Pjesme</h2>
            </div>

            <div className='div-zvuk back-yellow'>
            <img className='' src={MI} width='280px'></img>
                <p className='poruke-zvuk'>
                <h4>Ovdje možeš zajedno sa ostalom djecom zapjevati pjesmice.<br></br>
                <i>Pritiskom na gumb</i><button className='pokreni-zvuk' title='Pokreni'><img className='play-btn' src={sing}></img></button> <i>započinje reprodukcija pjesmice.</i></h4>
                <h4>Pjesmice sadrže tekst pa nije problem ukoliko ne znaš pjesmice.<br></br>
                Dodatno možeš preuzeti tekst pjesmice pritiskom na gumb <button className='pokreni-zvuk' title='Preuzmi'><img className='play-btn' src={down}></img></button>.</h4>
                <h2 className='color-green'>Pusti glas i zapjevaj!</h2>
                </p>
            </div>
            {/*Bratec Martin*/}
            <div className='naslov-lekcija back-blue'>
                <h2 className='stil-tekst'>Bratec Martin</h2>
            </div>
            <div className='reprodukcija'>
                    <button className='pokreni-zvuk' title='Pokreni' onClick={handleBratecStart}><img className='play-btn' src={sing}></img></button>
                    <button className='pokreni-zvuk' title='Zaustavi' onClick={handleBratecPause}><img className='play-btn' src={pause}></img></button>
                    <p className='stil-tekst'></p>
                </div>
            <div className='video-karaoke'>
                <div className=''>
                    <video width="800" ref={bratec}>
                        <source src={bratecMartin}></source>
                    </video>
                </div>
                <a href={tekstBratec} download><button className='pokreni-zvuk' title='Preuzmi'><img className='play-btn' src={down}></img></button></a>
                <p className='stil-tekst'>Preuzmi tekst pjesme</p>
            </div>
            {/*Muhara*/}
            <div className='naslov-lekcija back-blue'>
                <h2 className='stil-tekst'>Muhara</h2>
            </div>
            <div className='reprodukcija'>
                    <button className='pokreni-zvuk' title='Pokreni' onClick={handleMuharaStart}><img className='play-btn' src={sing}></img></button>
                    <button className='pokreni-zvuk' title='Zaustavi' onClick={handleMuharaPause}><img className='play-btn' src={pause}></img></button>
                    <p className='stil-tekst'></p>
                </div>
            <div className='video-karaoke'>
                <div className=''>
                    <video width="800" ref={muh}>
                        <source src={Muhara}></source>
                    </video>
                </div>
                <a href={tekstMuhara} download><button className='pokreni-zvuk' title='Preuzmi'><img className='play-btn' src={down}></img></button></a>
                <p className='stil-tekst'>Preuzmi tekst pjesme</p>
            </div>
            {/*HOKI POKI*/}
            <div className='naslov-lekcija back-blue'>
                <h2 className='stil-tekst'>HOKI POKI</h2>
            </div>
            <div className='reprodukcija'>
                    <button className='pokreni-zvuk' title='Pokreni' onClick={handleHOKIPOKIStart}><img className='play-btn' src={sing}></img></button>
                    <button className='pokreni-zvuk' title='Zaustavi' onClick={handleHOKIPOKIPause}><img className='play-btn' src={pause}></img></button>
                    <p className='stil-tekst'></p>
                </div>
            <div className='video-karaoke'>
                <div className=''>
                    <video width="800" ref={hoki}>
                        <source src={HOKIPOKI}></source>
                    </video>
                </div>
                <a href={tekstHokiPoki} download><button className='pokreni-zvuk' title='Preuzmi'><img className='play-btn' src={down}></img></button></a>
                <p className='stil-tekst'>Preuzmi tekst pjesme</p>
            </div>
            {/*Kad se male ruke sloze*/}
            <div className='naslov-lekcija back-blue'>
                <h2 className='stil-tekst'>Kad se male ruke slože</h2>
            </div>
            <div className='reprodukcija'>
                    <button className='pokreni-zvuk' title='Pokreni' onClick={handleKadStart}><img className='play-btn' src={sing}></img></button>
                    <button className='pokreni-zvuk' title='Zaustavi' onClick={handleKadPause}><img className='play-btn' src={pause}></img></button>
                    <p className='stil-tekst'></p>
                </div>
            <div className='video-karaoke'>
                <div className=''>
                    <video width="800" ref={kad}>
                        <source src={kadSe}></source>
                    </video>
                </div>
                <a href={tekstKadse} download><button className='pokreni-zvuk' title='Preuzmi'><img className='play-btn' src={down}></img></button></a>
                <p className='stil-tekst'>Preuzmi tekst pjesme</p>
            </div>

            <div className='bottomNav back-gray'>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-4-note' ><button className='kreni-btn next-btn'>&#171; Lekcija 4: Note</button></Link></a>
            <button className='stil-tekst lekcija-btn'>Lekcija 5: Pjesme</button>
            <a onClick={scrollToTop}><Link to='/kviz' ><button className='kreni-btn next-btn end-btn'>Kraj: Kviz &#187;</button></Link></a>
            </div>
        </div>
    )
}
export default Pjesme;