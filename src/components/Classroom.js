import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Classroom.css';
import '../design/back.css';
import DO from '../images/DOadventure.png';
import note from '../images/note.png';
import logo from '../images/logorobot.png';
import logo2 from '../images/logorobot2.png';

function Classroom(){

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }


    return(
        <div>
            <div className='container back-green'>
                <div className='pozdrav'>
                    <img className='robot' src={DO}></img>
                    <text className='poruka back-yellow'>Evo nas u virtualnoj učionici.<br></br> 
                    Ovdje možeš vidjeti glavni izbornik sa svim lekcijama koje ćemo zajedno istražiti.<br></br> 
                    Pritiskom na pojedinu lekciju započinje glazbena pustolovina.<br></br>
                    Stoga, opremi se sa svom potrebnom opremom i neka pustolovina započne! 
                    </text>
                </div>
                <img src={note} className='note-slika'></img>
            </div>
            <div className='izbornik back-gray'>
                <h3 className='nazivNav'>Glazbene lekcije:</h3>
                <p className='nazivNav'><i>Pritiskom na gumb odaberi lekciju.</i></p>
                <div className='navigacija'>
                    <a onClick={scrollToTop}><Link to='/ucionica/lekcija-1-zvukovi'><button className='btn prvi broj-pozadina'>Zvukovi</button></Link></a>
                    <a onClick={scrollToTop}><Link to='/ucionica/lekcija-2-obiljezja'><button className='btn drugi broj-pozadina'>Obilježja</button></Link></a>
                    <a onClick={scrollToTop}><Link to='/ucionica/lekcija-3-izvodaci'><button className='btn treci broj-pozadina'>Izvođači</button></Link></a>
                    <a onClick={scrollToTop}><Link to='/ucionica/lekcija-4-note'><button className='btn cetvrti broj-pozadina'>Note</button></Link></a>
                    <a onClick={scrollToTop}><Link to='/ucionica/lekcija-5-pjesme'><button className='btn peti broj-pozadina'>Pjesme</button></Link></a>
                    <a onClick={scrollToTop}><Link to='/ucionica/lekcija-6-povijest'><button className='btn sesti broj-pozadina'>Povijest</button></Link></a>
                </div>
            </div>
            <div className='back-red dno'>
                <p className='nazivNav color-white'>Nakon istraživanja glazbe, vrijeme je da provjeriš  svoje zanje u kvizu!</p>
                <div className='btn-div'>
                    <img src={logo}></img>
                    <a onClick={scrollToTop}><Link to='/kviz' ><button className='kreni-btn'>Provjeri znanje &#187;</button></Link></a>
                    <img src={logo2}></img>
                </div>
            </div>
        </div>
    )
}
export default Classroom;