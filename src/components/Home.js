import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import DO from '../images/DO.png'; //za sliku staviti
import RE from '../images/RE.png';
import MI from '../images/MI.png';
import logo from '../images/logorobot.png';
import logo2 from '../images/logorobot2.png';
import audioDO from '../audio/do.mp3';
import audioRE from '../audio/re.mp3';
import audioMI from '../audio/mi.mp3';
import '../design/Home.css';
import '../design/back.css';


function Home(){
    const [ime, setIme] = useState('');
    const [robotdo,setRobotDO] = useState('');
    const [robotre,setRobotRE] = useState('');
    const [robotmi,setRobotMI] = useState('');

   new Audio(audioDO);

    function handleChange(e){
        setIme(e.target.value);
    }
    
    function handleRobotDO(){
        setRobotDO('Bok ' + ime + ', ja se zovem DO. Plave sam boje i svi me vole. Volim istraživati i veselim se našoj zajedničkoj pustolovini!');
        new Audio(audioDO).play();
    }
    function handleRobotRE(){
        setRobotRE('Bok ' + ime + ', ja se zovem RE. Sva se crvenim jer postavljam previše pitanja. Pripremi se za moja zagonetna pitanja!');
        new Audio(audioRE).play();
    }
    function handleRobotMI(){
        setRobotMI('Bok ' + ime + ', ja se zovem MI. Narančasta sam kao mrkva. Obožavam igru i zabavu. Jedva čekam da se igramo zajedno!');
        new Audio(audioMI).play();
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
    <div className='pozadina'>
        <div className='uvod stil-tekst back-red color-white'>
            <h2 className=' color-black'>Dobrodošli u prvu online glazbenu učionicu!</h2>
            <text>Provest ćemo te kroz nezaboravnu pustolovinu upoznavanja svijeta glazbe.</text>
            <text>Upoznat ćeš kako glazba nastaje, tko ju stvara i koje instrumente koristi.</text>
            <h3>Upoznaj naše vesele glazbene robote koji će te voditi kroz pustolovinu.</h3>
            <div className='okvir-tekst back-blue'>
                <text>Na početku upoznavanja predstavi se robotima svojim imenom.</text>
                <text><b>Zovem se</b></text>
                <input type="text" placeholder='ime' value={ime} onChange={handleChange}></input>
            </div> 
            <text><i>Pritisni na robota i upoznaj se sa njim.</i></text>
        </div>
        <div className='back-yellow sredina'>
            <div className='poruke'>
                    <text className='do back-liyellow'>{robotdo}</text>
                    <text className='re back-liyellow'>{robotre}</text>
                    <text className='mi back-liyellow'>{robotmi}</text>
            </div>
            <div className='roboti'>
                <button onClick={handleRobotDO} className="do back-yellow"><img className='robot' src={DO}></img></button>
                <button onClick={handleRobotRE} className="re back-yellow"><img className='robot' src={RE}></img></button>
                <button onClick={handleRobotMI} className="mi back-yellow"><img className='robot' src={MI}></img></button>
            </div>
        </div>
        
        <div className='kraj stil-tekst back-green'>
            <text className='color-white'>Nakon što si upoznao naše robote možemo zajedno krenuti u glazbenu pustolovinu.</text>
            <h2 className='istakni'>Neka pustolovina započne!</h2>
            <div className='btn-div'>
                <img src={logo}></img>
                <a onClick={scrollToTop}><Link to='/ucionica' ><button className='kreni-btn stil-tekst'>KRENI &#187;</button></Link></a>
                <img src={logo2}></img>
            </div>
        </div>
    </div>
        
    )
}
export default Home;