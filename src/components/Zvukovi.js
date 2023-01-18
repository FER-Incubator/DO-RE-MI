import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/Zvukovi.css';
import '../design/back.css';
import MI1 from '../images/mi1.png';
import MI2 from '../images/mi2.png';
import DO from '../images/DO.png';
import play from '../images/play.png';
import pause from '../images/pause.png';
import macka from '../images/maca.png';
import psic from '../images/pas.png';
import kravica from '../images/krava.png';
import patkica from '../images/patka.png';
import vrapcic from '../images/vrabac.png';
import govorenje from '../images/govor.png';
import pjevaj from '../images/pjevanje.png';
import sviraj from '../images/sviranje.png';
import audioGovor from '../audio/govor.mp3';
import audioPjevanje from '../audio/pjevanje.mp3';
import audioSviranje from '../audio/sviranje.mp3';
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
    const [govor,setGovor] = useState(new Audio(audioGovor));
    const [pjevanje,setPjevanje] = useState(new Audio(audioPjevanje));
    const [sviranje,setSviranje] = useState(new Audio(audioSviranje));
    const [miPjevamo,setMiPjevamo] = useState('');
    const [miGovorimo,setMiGovorimo] = useState('');
    const [miSviramo,setMiSviramo] = useState('');

    const handleGlasanjeStart = () => {
        audioAnimals.play();
    }

    const handleGlasanjePause = () => {
        audioAnimals.pause();
    }

    const handleGovor = () => {
        pjevanje.pause();
        sviranje.pause();
        govor.play();
        setMiGovorimo('MI PRIČAMO');
    }
    const handlePjevanje = () => {
        govor.pause();
        sviranje.pause();
        pjevanje.play();
        setMiPjevamo('JA PJEVAM I PLJEŠĆEM RUKAMA');
    }
    const handleSviranje = () => {
        pjevanje.pause();
        govor.pause();
        sviranje.play();
        setMiSviramo('JA SVIRAM')
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
            
            <div className='div-zvuk back-yellow'>
            <img className='' src={MI1} width='220px'></img>
                <p className='poruke-zvuk'>
                    <h3 className=''><i>Pritiskom na gumb</i><button className='pokreni-zvuk' title='Pokreni'><img className='play-btn' src={play}></img></button> <i>započinje reprodukcija glazbenog sadržaja.</i></h3>
                    <h4>Pokušaj slušajući sadržaj odgonetnuti koja od ponuđenih životinja proizvodi zvuk.</h4>
                    <h4>Kada odgonetneš o kojoj je životinji riječ pritisni na sličicu te provjeri je li to uistinu glasanje odabrane životinje.</h4>
                </p>
            </div>
                            
            <div className='reprodukcija back-gray'>
                <button className='pokreni-zvuk' title='Pokreni' onClick={handleGlasanjeStart}><img className='play-btn' src={play}></img></button>
                <button className='pokreni-zvuk' title='Zaustavi' onClick={handleGlasanjePause}><img className='play-btn' src={pause}></img></button>
                <p className='stil-tekst'>Oponašanje glasanja životinja</p>
            </div>

            <div className='animals back-green'>
                <div className='animals1'>
                    <text className='stil-tekst '>{krava}</text>
                    <text className='stil-tekst '>{vrabac}</text>
                    <text className='stil-tekst '>{maca}</text>
                    <button onClick={handleKrava} className="animal-btn"><img className='manja' src={kravica} width='160px'></img></button>
                    <button onClick={handleVrabac} className="animal-btn"><img className='veca' src={vrapcic} width='130px'></img></button>
                    <button onClick={handleMaca} className="animal-btn"><img className='veca' src={macka} width='160px'></img></button>
                </div>
                <div className='animals2'>
                    <text className='stil-tekst '>{pas}</text>
                    <text className='stil-tekst '>{patka}</text>
                    <button onClick={handlePas} className="animal-btn"><img className='veca' src={psic} width='110px'></img></button>
                    <button onClick={handlePatka} className="animal-btn"><img className='manja' src={patkica} width='150px'></img></button>
                </div> 
            </div> 

            <div className='naslov-lekcija back-blue' id=''>
                <h2 className='stil-tekst'>Uvod</h2>
            </div>

            <div className='div-zvuk back-darkblue'>
            <img className='' src={DO} width='250px'></img>
                <p className='poruke-zvuk tekst-zvuk'>
                    <h4 className='color-darkblue'>Kao što smo čuli u prethodnom primjeru, <b className='color-green'>životinje se glasaju</b>.</h4>
                    <h4>Svaka životinja se glasa na svoj način.</h4>
                    <h4>Tako se ističe od drugih vrsta životinja.</h4>
                    <h3>Životinje dok se glasaju <b className='color-yellow'>stvaraju razne zvukove</b>.</h3>
                </p>
            </div>

            
            <div className='div-zvuk back-yellow'>
            
                <p className='poruke-zvuk'>
                    <h3 className=''>Ljudi također stavraju različite zvukove.</h3>
                    <h4>Stvaramo ih govorom, pjevanje, tijelom te pomoću raznih instrumenata.</h4>
                    <h4><i>Pritisni na pojedinu sličicu i poslušaj primjere.</i></h4>
                </p>
                <img className='' src={MI2} width='220px'></img>
            </div>


            <div className='animals back-green'>
                <div className='ljudi-zvukovi'>
                    <text className='stil-tekst '>{miGovorimo}</text>
                    <text className='stil-tekst '>{miPjevamo}</text>
                    <text className='stil-tekst '>{miSviramo}</text>
                    <button onClick={handleGovor} className="animal-btn"><img className='' src={govorenje} width='260px'></img></button>
                    <button onClick={handlePjevanje} className="animal-btn"><img className='' src={pjevaj} width='150px'></img></button>
                    <button onClick={handleSviranje} className="animal-btn"><img className='' src={sviraj} width='150px'></img></button>
                </div> 
            </div>   

            <div className='div-zvuk back-darkblue'>
                <p className='poruke-zvuk tekst-zvuk'>
                    <h4 className='tekst-align'>Dok govoriš, stvaraš gomile zvukova sa određenim značenjem.<br></br>
                    To značenje smo odredili mi, ljudi.<br></br>
                    Pomoću govora izmjenjujemo misli i ideje.</h4>
                    <h4 className='tekst-align'><b className='color-red'>Glazba</b> je <b className='color-green'>umjetnost kojom prenosimo misli i ideje</b>, ali i više od toga.<br></br>
                    Glazbom možemo prenositi svoje <b className='color-yellow'>osjećaje</b> (jesmo li sretni ili tužni, ljuti ili smireni).</h4>
                    <h4 className='tekst-align'>Za stavranje glazbe su potrebni ljudi.<br></br>
                    <b className='color-blue'>Pišemo pjesme, pjevamo, sviramo i plešemo</b>.</h4>
                </p>
                <img className='' src={DO} width='250px'></img>
            </div>       
            
            <div className='bottomNav back-gray'>
            <a onClick={scrollToTop}><Link to='/ucionica' ><button className='kreni-btn next-btn back-btn'>&#171; Povratak: Učionica</button></Link></a>
            <button className='stil-tekst lekcija-btn'>Lekcija 1: Zvukovi</button>
            <a onClick={scrollToTop}><Link to='/ucionica/lekcija-2-obiljezja' ><button className='kreni-btn next-btn'>Lekcija 2: Obilježja &#187;</button></Link></a>
            </div>
        </div>
    )
}
export default Zvukovi;