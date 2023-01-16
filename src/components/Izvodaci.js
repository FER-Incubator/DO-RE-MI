import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/back.css';
import '../design/Izvodaci.css';
import harfa from '../images/Instrumenti_slike/harfa.png'
import klarinet from '../images/Instrumenti_slike/klarinet.png'
import celo from '../images/Instrumenti_slike/celo.png'
import fagot from '../images/Instrumenti_slike/fagot.png'
import flauta from '../images/Instrumenti_slike/flauta.png'
import kontrabas from '../images/Instrumenti_slike/kontrabas.png'
import oboa from '../images/Instrumenti_slike/oboa.png'
import viola from '../images/Instrumenti_slike/viola.png'
import violina from '../images/Instrumenti_slike/violina.png'
import DO from '../images/DO.png';
import harfa_zv from '../audio/Instrumenti_zvukovi/harfa.mp3'
import klarinet_zv from '../audio/Instrumenti_zvukovi/klarinet.mp3'
import celo_zv from '../audio/Instrumenti_zvukovi/celo.mp3'
import fagot_zv from '../audio/Instrumenti_zvukovi/fagot.mp3'
import flauta_zv from '../audio/Instrumenti_zvukovi/flauta.mp3'
import kontrabas_zv from '../audio/Instrumenti_zvukovi/kontrabas.mp3'
import oboa_zv from '../audio/Instrumenti_zvukovi/oboa.mp3'
import viola_zv from '../audio/Instrumenti_zvukovi/viola.mp3'
import violina_zv from '../audio/Instrumenti_zvukovi/violina.mp3'

import {useSpring, animated} from "react-spring";

function HarfaFun(){
    new Audio(harfa_zv).play()
}
function KlarinetFun(){
    new Audio(klarinet_zv).play()
}
function CeloFun(){
    new Audio(celo_zv).play()
}
function FagotFun(){
    new Audio(fagot_zv).play()
}
function FlautaFun(){
    new Audio(flauta_zv).play()
}
function KontraFun(){
    new Audio(kontrabas_zv).play()
}
function OboaFun(){
    new Audio(oboa_zv).play()
}
function ViolaFun(){
    new Audio(viola_zv).play()
}
function ViolinaFun(){
    new Audio(violina_zv).play()
}

function Izvodaci(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const [flip, setFlip] = useState(false)
    const props = useSpring({
        config: {mass:70, tension:400, friction:18, clamp: true},
        to: {opacity: 1},
        from: {opacity: 0},
        onRest: () => setFlip(!flip),
    })

    const cursor = document.querySelector('#cursor')
    window.addEventListener('mousemove', (e) => {
        console.log("pomaknuto!")
        cursor.style.left = (e.x - 150) + 'px'
        cursor.style.top = (e.y - 150) + 'px'
    })

    return(
        <div>
            <div className="cursor" id="cursor"></div>
            <div className='naslov-lekcija back-blue'>
                <h1 className='stil-tekst'>Obilježja glazbe</h1>
            </div>
            <div className="pocetnidiv">
                <p>
                    <h4>U ovom dijelu upoznat ćemo se sa instrumentima koje koriste izvođači u orkestru.</h4>
                    <h4>Orkestar je instrumentalni glazbeni ansambl koji je obično prilično velik.<br></br> 
                    Najčešće sa sekcijama gudača, limenih glazbala, drvenih puhačkih glazbala te udaraljkama. </h4>
                    <h4>Zajedno ćemo proći sve instrumente, upoznati se s njima i poslušati kako zvuče.</h4>
                </p>
                <img className='' src={DO} width='250px'></img>
            </div>
            
        <div className="izvodaci">


                




            <p className='uputa'>
                <i>Pritiskom na sličicu započinje reprodukcija audio sadržaja.</i>
            </p>
            
            <div className="div_btn">
                <button className="btn_lijevi" onClick={HarfaFun}><img src={harfa} width='200px'></img></button>
                        <div className="div_harfa">
                            <h2>Harfa</h2>
                            <h3 className="title2">Iz obitelji gudačkih instrumenata</h3>
                            <h3>Harfa koja se koristi u orkestru teži preko 45 kilograma</h3>
                            <h3>Neke harfe imaju pedale koje, kada su pritisnute, mijenjaju visinu tona svake žice</h3>
                        </div>

            </div>


            <div className="div_btn">
                <div className="div_klarinet">
                    <h2>Klarinet</h2>
                    <h3>Iz obitelji puhačkih instrumenata</h3>
                    <h3>Ima jedan jezičak od trske koji vibrira kako bi proizveo zvuk</h3>
                    <h3>Obično se koristi u orkestrima i jazzu</h3>
                </div>
                <button className="btn_desni" onClick={KlarinetFun}><img src={klarinet} width='140px'></img></button>
            </div>
            <div className="div_btn">
                <button className="btn_lijevi" onClick={FagotFun}><img src={fagot} width='200px'></img></button>
                <div className="div_fagot">
                    <h2>Fagot</h2>
                    <h3>Proizvodi najniži ton u obitelji drvenih puhačkih instrumenata</h3>
                    <h3>Instrument s dvostrukom jezičkom</h3>
                    <h3>Tijelo instrumenta bi bilo preko dva i pol metra dugo da nije savijeno</h3>
                </div>
            </div>
            <div className="div_btn">
                <div className="div_flauta">
                    <h2>Flauta</h2>
                    <h3>Iz obitelji drvenih puhačkih instrumenata, ali obično izrađena od metala</h3>
                    <h3>Glazbenikov vibrirajući dah stvara zvuk</h3>
                    <h3>Najstariji instrumenti ikada pronađeni su flaute (stare preko 40 000 godina)</h3>
                </div>
                <button className="btn_desni" onClick={FlautaFun}><img src={flauta} width='180px'></img></button>
            </div>
            <div className="div_btn">
                <button className="btn_lijevi" onClick={OboaFun}><img src={oboa} width='80px'></img></button>
                <div className="div_oboa">
                    <h2>Oboa</h2>
                    <h3>Iz obitelji drvenih puhačkih instrumenata</h3>
                    <h3>Ima dvostruki jezičak: dva komada drveta koji vibriraju kako bi proizveli zvuk</h3>
                    <h3>Svira štimanje A tona za pomoć glazbenicima pri ugađanju prije koncerta</h3>
                </div>
            </div>
            <div className="div_btn">
                <div className="div_kontrabas">
                    <h2>Kontrabas</h2>
                    <h3>Najveći instrument i najniži ton iz obtelji žičanih instrumenata</h3>
                    <h3>Glazbenik stoji ili se oslanja na stolac kako bi ga svirao</h3>
                    <h3>Kontrabas u punoj veličini je visok dva metra</h3>
                </div>
                <button className="btn_desni" onClick={KontraFun}><img src={kontrabas} width='120px'></img></button>
            </div>
            <div className="div_btn">
                <button className="btn_lijevi" onClick={ViolaFun}><img src={viola} width='180px'></img></button>
                <div className="div_viola">
                    <h2>Viola</h2>
                    <h3>Žičani instrument nešto veći od violine</h3>
                    <h3>Ima četiri žice</h3>
                    <h3>Zvuk se često uspoređuje s ljudskim glasom</h3>
                </div>
            </div>
            <div className="div_btn">
                <div className="div_celo">
                    <h2>Violončelo</h2>
                    <h3>Drugi najniži ton među orkestarskim gudačkim instrumentima</h3>
                    <h3>Svira se između koljena glazbenika koji sjedi</h3>
                    <h3>Stoji na tlu kada ga se svira</h3>
                </div>
                <button className="btn_desni" onClick={CeloFun}><img src={celo} width='140px'></img></button>
            </div>
            <div className="div_btn">
                <button className="btn_lijevi" onClick={ViolinaFun}><img src={violina} width='180px'></img></button>
                <div className="div_violina">
                    <h2>Violina</h2>
                    <h3>Najmanji član iz obitelji gudačkih instrumenata</h3>
                    <h3>Dok se svira stoji ispod brade glazbenika</h3>
                    <h3>Koncert-majstor je glavni violinist koji djeluje kao vođa orkestra</h3>
                </div>
            </div>
            
        </div>
            <div className='bottomNav'>
                <a onClick={scrollToTop}><Link to='/ucionica/lekcija-2-obiljezja' ><button className='kreni-btn next-btn'>&#171; Lekcija 2: Obilježja</button></Link></a>
                <button className='stil-tekst lekcija-btn'>Lekcija 3: Izvođači</button>
                <a onClick={scrollToTop}><Link to='/ucionica/lekcija-4-note' ><button className='kreni-btn next-btn'>Lekcija 4: Note &#187;</button></Link></a>
            </div>
        </div>

    )
}
export default Izvodaci;