import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/back.css';
import '../design/Obiljezja.css';
import MI1 from '../images/mi1.png';
import MI2 from '../images/mi2.png';
import DO from '../images/DO.png';
import DOviri from '../images/doviri.png';


function Obiljezja(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div>
            <div className='naslov-lekcija back-blue'>
                <h1 className='stil-tekst'>Obilježja glazbe</h1>
            </div>

            <div className='poruka-lekcija-do-obiljezja back-darkblue pozdrav-obiljezja'>
                <img className='' src={DO} width='250px'></img>
                <div className='tekst-do-obiljezja'>
                <text className=''>Glazbi možemo pridijeliti obilježja. <br></br> 
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

            <div className='poruka-lekcija-do-obiljezja back-darkblue pozdrav-viri'>
                <img className='robot-do' src={DOviri}></img>
                <div className='tekst-do'>
                <text className=''>Kao što smo čuli u prethodnom primjeru, životinje se glasaju.<br></br>
                        Svaka životinja se glasa na svoj način.<br></br>Tako se ističe od drugih vrsta životinja.<br></br>Životinje dok se glasaju stvaraju razne zvukove.</text>
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