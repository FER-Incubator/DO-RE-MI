import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/back.css';
import '../design/Note.css';

import DO from '../images/DO.png';
import RE from '../images/RE.png';
import MI from '../images/MI.png';

import dur_zv from '../audio/dur.mp3';
import dur_sl from '../images/dur.png';

import nota_pun from '../video/nota_pun.mp4'
import nota_pol from '../video/nota_pol.mp4'
import nota_cet from '../video/nota_cet.mp4'
import nota_osm from '../video/nota_osm.mp4'
import nota_ses from '../video/nota_ses.mp4'

import nota_pun_sl from '../images/nota_pun.png'
import nota_pol_sl from '../images/nota_pol.png'
import nota_cet_sl from '../images/nota_cet.png'
import nota_osm_sl from '../images/nota_osm.png'
import nota_ses_sl from '../images/nota_ses.png'

import play from '../images/play.png';
import pause from '../images/pause.png';

import ReactAudioPlayer from "react-audio-player";

function Note(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const [audioDur,setAudioDur] = useState(new Audio(dur_zv));

    const handleStart = () => {
        audioDur.play();
     }
 
     const handlePause = () => {
        audioDur.pause();
     }

    return(
        <div>

            <div className='naslov'>
                <h1>Note</h1>
            </div>

            <div className="pocetnidiv back-darkblue">
                <p>
                    <h3>Note označavaju ideju zapisa glazbe na papir, rabi se notno crtovlje s 5 crta</h3>
                    <h3>gdje pozicija note u odnosu na crtovlje označava njenu visinu,a grafički izgled trajanje, </h3>
                    <h3>također označavaju i notni zapis nekog određenog glazbenog djela</h3>
                </p>
                <img className='' src={DO} width='250px'></img>
            </div>

            <div className="drugidiv">
                <img className='' src={RE} width='250px'></img>
                <p>
                    <h3>Svaka nota ima svoje ime koje označava njenu visinu, note po redu zovemo</h3>
                    <h3>prima, sekunda, terca, kvarta, kvinta, seksta i septima,</h3>
                    <h3>te iste note poznate su i po imenima</h3>
                    <h3><b className='color-blue'>DO</b>, <b className='color-pink'>RE</b>, <b className='color-yellow'>MI</b>, <b className='color-green'>FA</b>, <b className='color-orange'>SOL</b>, <b className='color-brown'>LA</b> i <b className='color-purple'>TI</b></h3>
                </p>
            </div>

            <div className="trecidiv back-red">
                <p></p>
                <p>
                    <h3>Ispod prvo možemo poslušati i vidjeti prikaz nota od najniže do najviše,</h3>
                    <h3>pa onda i u drugome smjeru od najviše do najniže</h3>
                </p>
                <img className='' src={dur_sl} width='800px'></img>
                <p>
                <i>Pritiskom na gumb</i><button className='pokreni-zvuk' title='Pokreni'><img className='play-btn' src={play}></img></button> <i>započinje reprodukcija audio sadržaja.</i>
                </p>
                <div className='reprodukcija'>
                    <button className='pokreni-zvuk' title='Pokreni' onClick={handleStart}><img className='play-btn' src={play}></img></button>
                    <button className='pokreni-zvuk' title='Zaustavi' onClick={handlePause}><img className='play-btn' src={pause}></img></button>
                    <p className='stil-tekst'>Ton od najniže do najviše note</p>
                </div>
            </div>

            <div className="cetvrtidiv back-yellow">
                <p>
                    <h3>Note isto razlikujemo po njihovom izgledu i svaka ima svoje ime</h3>
                    <h3>ovisno o izgledu, tu su cijela nota, polovinka, četvrtinka,</h3>
                    <h3>osminka i šesnaestinka... Svaka nota ima svoje trajanje,</h3>
                    <h3>a kako zvuči možeš provjeriti klikom na sliku uz notu</h3>
                </p>
                <img className='' src={MI} width='250px'></img>
            </div>





            <div className="notapundiv">
                <img className='' src={nota_pun_sl} width='60px'></img>
                <p className="pcijela">
                    <h2>Cijela nota ima trajanje od 4 otkucaja</h2>
                </p>
                <div className="testnidiv">
                    <video width="100%" onClick={e => e.target.play()}>
                        <source src={nota_pun} type="video/mp4"
                        />
                    </video>
                </div>
                <p></p>
            </div>


            <div className="notapoldiv">
                <p></p>
                <div className="testnidiv">
                    <video width="100%" onClick={e => e.target.play()}>
                        <source src={nota_pol} type="video/mp4"
                        />
                    </video>
                </div>
                <p className="ppola">
                    <h2>Polovinka ima trajanje od 2 otkucaja</h2>
                </p>
                <img className='' src={nota_pol_sl} width='60px'></img>
            </div>

            <div className="notacetdiv">
                <img className='' src={nota_cet_sl} width='60px'></img>
                <p className="pcet">
                    <h2>Četvrtinka ima trajanje od 1 otkucaja</h2>
                </p>
                <div className="testnidiv">
                    <video width="100%" onClick={e => e.target.play()}>
                        <source src={nota_cet} type="video/mp4"
                        />
                    </video>
                </div>
            </div>

            <div className="notaosmdiv">
                <div className="testnidiv">
                    <video width="100%" onClick={e => e.target.play()}>
                        <source src={nota_osm} type="video/mp4"
                        />
                    </video>
                </div>
                <p className="posm">
                    <h2>Osminka ima trajanje od pola otkucaja</h2>
                </p>
                <img className='' src={nota_osm_sl} width='190px'></img>
            </div>

            <div className="notasesdiv">
                <img className='' src={nota_ses_sl} width='100px'></img>
                <p className="pses">
                    <h2>Šesnaestinka ima trajanje od četvrtine otkucaja</h2>
                </p>
                <div className="testnidiv">
                    <video width="100%" onClick={e => e.target.play()}>
                        <source src={nota_ses} type="video/mp4"
                        />
                    </video>
                </div>
            </div>

            <div className='bottomNav'>
                <a onClick={scrollToTop}><Link to='/ucionica/lekcija-3-izvodaci' ><button className='kreni-btn next-btn'>&#171; Lekcija 3: Izvođači</button></Link></a>
                <button className='stil-tekst lekcija-btn'>Lekcija 4: Note</button>
                <a onClick={scrollToTop}><Link to='/ucionica/lekcija-5-pjesme' ><button className='kreni-btn next-btn'>Lekcija 5: Pjesme &#187;</button></Link></a>
            </div>


        </div>





    )
}
export default Note;