import React ,{useState, useMemo} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/Zvukovi.css';
import '../design/back.css';
import MI from '../images/MI.png';
import DO from '../images/DO.png';
import play from '../images/play.png';
import pause from '../images/pause.png';
import macka from '../images/maca.png';
import psic from '../images/pas.png';
import kravica from '../images/krava.png';
import patkica from '../images/patka.png';
import vrapcic from '../images/vrabac.png';
import staja from '../images/staja.png';
import drvo from '../images/drvo.png';
import audioAnimal from '../audio/animals.mp3';

function Zvukovi(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    
    const [audioAnimals,setAudio] = useState(new Audio(audioAnimal))
    const [maca,setMaca] = useState('');
    const [patka,setPatka] = useState('');
    const [pas,setPas] = useState('');
    const [krava,setKrava] = useState('');
    const [vrabac,setVrabac] = useState('');

    const handleGlasanjeStart = () => {
        audioAnimals.play();
    }

    const handleGlasanjePause = () => {
        audioAnimals.pause();
    }

    function handleMaca(){
        setMaca('MIJAU - MIJAU');
    }
    function handlePatka(){
        setPatka('GA - GA');
    }
    function handlePas(){
        setPas('VAU - VAU');
    }
    function handleKrava(){
        setKrava('MUUU - MUUU');
    }
    function handleVrabac(){
        setVrabac('ŽIV - ŽIV');
    }
    
    return(
        <div>
            <div className='naslov-lekcija back-blue'>
                <h1 className='stil-tekst'>Zvukovi</h1>
            </div>
            
            <div className='poruka-lekcija-mi back-yellow pozdrav-zvuk'>
                <img className='robot-mi' src={MI}></img>
                <div className='tekst-mi'>
                    <text className='back-yellow'>Pritiskom na gumb <button className='pokreni-zvuk' title='Pokreni'><img className='play-btn' src={play}></img></button> započinje reprodukcija glazbenog sadržaja.<br></br> 
                    Pokušaj slušajući sadržaj odgonetnuti koja od ponuđenih životinja proizvodi zvuk.<br></br> 
                    Kada odgonetneš o kojoj je životinji riječ pritisni na sličicu te provjeri je li to uistinu glasanje odabrane životinje. </text>
                </div>
            </div> 
                
            <div className='reprodukcija back-gray'>
                <button className='pokreni-zvuk' title='Pokreni' onClick={handleGlasanjeStart}><img className='play-btn' src={play}></img></button>
                <button className='pokreni-zvuk' title='Zaustavi' onClick={handleGlasanjePause}><img className='play-btn' src={pause}></img></button>
                <p className='stil-tekst'>Oponašanje glasanja životinja</p>
            </div>

            <div className='animals back-green'>
                <div className='animals1'>
                    <text className='stil-tekst '>{pas}</text>
                    <text className='stil-tekst '>{krava}</text>
                    <text className='stil-tekst '>{maca}</text>
                    <button onClick={handlePas} className="animal-btn"><img className='veca' src={psic} width='110px'></img></button>
                    <button onClick={handleKrava} className="animal-btn"><img className='manja' src={kravica} width='160px'></img></button>
                    <button onClick={handleMaca} className="animal-btn"><img className='veca' src={macka} width='180px'></img></button>
                </div>
                <div className='animals2'>
                    <text className='stil-tekst '>{patka}</text>
                    <text className='stil-tekst '>{vrabac}</text>
                    <button onClick={handlePatka} className="animal-btn"><img className='manja' src={patkica} width='90px'></img></button>
                    <button onClick={handleVrabac} className="animal-btn"><img className='veca' src={vrapcic} width='120px'></img></button>
                </div> 
            </div> 

            <div className='poruka-lekcija-do back-darkblue pozdrav-zvuk'>
                <img className='robot-mi' src={DO}></img>
                <div className='tekst-do'>
                    <text className=''>Kao što smo čuli u prethodnom primjeru, zvukovi su posvuda.<br></br>
                    Životinje se glasaju i time stvaraju razne zvukove. <br></br>Ljudi također proizvode zvukove pri govoru i pjevanju. <br></br>
                    Glazba se sastoji od puno različitih zvukova.</text>
                </div>
            </div>           
            
            <div className='bottomNav'>
            <a onClick={scrollToTop}><Link to='/ucionica' ><button className='kreni-btn next-btn back-btn'>&#171; Povratak: Učionica</button></Link></a>
            <button className='stil-tekst lekcija-btn'>Lekcija 1: Zvukovi</button>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-2-obiljezja' ><button className='kreni-btn next-btn'>Lekcija 2: Obilježja &#187;</button></Link></a>
            </div>
        </div>
    )
}
export default Zvukovi;