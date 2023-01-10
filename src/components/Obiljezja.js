import React ,{useState, useRef} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/back.css';
import '../design/Obiljezja.css';
import MI1 from '../images/mi1.png';
import MI2 from '../images/mi2.png';
import DO from '../images/DO.png';
import bubanj from '../images/jap_bubanj.png';
import play from '../images/play.png';
import pause from '../images/pause.png';
import audiobubanj from '../audio/bubanj.mp3';
import videobubanj from '../video/bubnjevi.mp4';


function Obiljezja(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const bubanjRef = useRef();

    const handleStart = () => {
       bubanjRef.current.play();
    }

    const handlePause = () => {
        bubanjRef.current.pause();
    }
    function handleBubanj(){
        new Audio(audiobubanj).play();
    }



    return(
        <div>
            <div className='naslov-lekcija back-blue'>
                <h1 className='stil-tekst'>Obilježja glazbe</h1>
            </div>

            <div className='poruka-lekcija-do-obiljezja back-darkblue pozdrav-obiljezja'>
                <img className='' src={DO} width='250px'></img>
                <div className='tekst-do-obiljezja'>
                <text className=''>Glazbi možemo dodijeliti obilježja. <br></br> 
                Mi ćemo navesti <b>7 osnovnih glazbenih obilježja</b> koja možemo prepoznati i primjeniti na sva glazbena djela.</text>
                    <div className='lista'>
                        <ul className='lista-obiljezja'> 
                            <li><a href='#ritam'><button className='broj-btn' title='Ritam'>1.</button></a>Ritam</li>
                            <li><a href='#tempo'><button className='broj-btn' title='Tempo'>2.</button></a>Tempo</li>
                            <li><a href='#dinamika'><button className='broj-btn' title='Dinamika'>3.</button></a>Dinamika</li>
                            <li><a href='#ugođaj'><button className='broj-btn' title='Ugođaj'>4.</button></a>Ugođaj</li>
                            <li><a href='#melodija'><button className='broj-btn' title='Melodija'>5.</button></a>Melodija</li>
                            <li><a href='#glazbenislog'><button className='broj-btn' title='Glazbeni slog'>6.</button></a>Glazbeni slog</li>
                            <li><a href='#izvodaci'><button className='broj-btn' title='Izvođači'>7.</button></a>Izvođači</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='naslov-lekcija back-blue' id='ritam'>
                <h2 className='stil-tekst'>1.Ritam</h2>
            </div>

            <div className='back-gray stil-tekst obiljezje-opis'>
                <div className='uvod'>
                    <p className='tekst-opis'><b className='color-red'>Ritam</b>  možemo u općem smislu definirati kao <br></br><b className='color-green'>ponavljanje određenih pojava u pravilnim vremenskim razmacima</b>.<br></br>
                    U <b className='color-yellow'>svijetu glazbe</b>, ritam je obilježje glazbe koje određuje <b className='color-yellow'>trajanje u glazbi</b>.<br></br>
                    Predstavlja <b className='color-blue'>odnose između zvukova različitog trajanja i jakosti</b>.<br></br>
                    Ritam može biti odlična glazba sama za sebe. Najčešće se veže uz tradicionalnu glazbu naroda Crne Afrike, Indijanaca, Inuita (Eskima) i nekih naroda Azije.</p>
                </div>
                <div className='div-bubanj'>
                    <p className='tekst-opis'>Na slici je prikazan tradicionalni japanski instrument, japanski bubanj <b>Taiko</b>.<br></br>
                        <i>Pritisni na sličicu i poslušaj zvuk japanskog bubnja.</i>
                    </p>
                    <button onClick={handleBubanj} className="btn-bubanj back-gray"><img className='' src={bubanj} width='150px'></img></button>
                </div>
                <p className='tekst-opis'>U nastavku se nalazi video koji prikazuje japanski sastav Kodo koji svira Taiko bubnjeve.<br></br>
                <i>Pritiskom na gumb</i><button className='pokreni-zvuk' title='Pokreni'><img className='play-btn' src={play}></img></button> <i>započinje reprodukcija video sadržaja.</i></p>
                <div className='reprodukcija'>
                    <button className='pokreni-zvuk' title='Pokreni' onClick={handleStart}><img className='play-btn' src={play}></img></button>
                    <button className='pokreni-zvuk' title='Zaustavi' onClick={handlePause}><img className='play-btn' src={pause}></img></button>
                    <p className='stil-tekst'>Japanski sastav Kodo - "O-Daiko"</p>
                </div>
                <div>
                    <video width="600" ref={bubanjRef}>
                        <source src={videobubanj}></source>
                    </video>
                </div>
            </div>

            <div className='naslov-lekcija back-blue' id='tempo'>
                <h2 className='stil-tekst'>2.Tempo</h2>
            </div>

            <div className='naslov-lekcija back-blue' id='dinamika'>
                <h2 className='stil-tekst'>3.Dinamika</h2>
            </div>

            <div className='naslov-lekcija back-blue' id='ugođaj'>
                <h2 className='stil-tekst'>4.Ugođaj</h2>
            </div>

            <div className='naslov-lekcija back-blue' id='melodija'>
                <h2 className='stil-tekst'>5.Melodija</h2>
            </div>

            <div className='naslov-lekcija back-blue' id='glazbenislog'>
                <h2 className='stil-tekst'>6.Glazbeni slog</h2>
            </div>

            <div className='naslov-lekcija back-blue' id='izvodaci'>
                <h2 className='stil-tekst'>7.Izvođači</h2>
            </div>

            <div className='bottomNav back-gray'>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-1-zvukovi' ><button className='kreni-btn next-btn'>&#171; Lekcija 1: Zvukovi</button></Link></a>
            <button className='stil-tekst lekcija-btn'>Lekcija 2: Obilježja</button>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-3-izvodaci' ><button className='kreni-btn next-btn'>Lekcija 3: Izvođači &#187;</button></Link></a>
            </div>
        </div>
    )
}
export default Obiljezja;