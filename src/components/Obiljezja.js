import React ,{useState, useRef} from 'react';
import {Link} from "react-router-dom";
import '../design/Lekcija.css';
import '../design/back.css';
import '../design/Obiljezja.css';
import DO from '../images/DO.png';
import bubanj from '../images/jap_bubanj.png';
import play from '../images/play.png';
import pause from '../images/pause.png';
import stop from '../images/stop.png';
import lupa from '../images/lupa.png';
import slow from '../images/slow.png';
import medium from '../images/medium.png';
import fast from '../images/fast.png';
import metronom from '../images/metronom.png';
import dinamika1 from '../images/dinamika1.png';
import dinamika2 from '../images/dinamika2.png';
import crescendo from '../images/crescendo.png';
import decrescendo from '../images/decrescendo.png';
import spring from '../images/spring.jpg';
import summer from '../images/summer.jpg';
import autumn from '../images/autumn.png';
import winter from '../images/winter.jpg';
import river from '../images/river.jpg';
import monofoni from '../images/monofoni.png';
import polifoni from '../images/polifoni.png';
import homofoni from '../images/homofoni.png';
import vokalna from '../images/vokalno.png';
import instrumentalna from '../images/instrumentalna.png';
import vokinstrument from '../images/vokinstrument.png';
import solist from '../images/solist.png';
import komorna from '../images/komorna.png';
import orkestralna from '../images/orkestralna.png';
import audioMetronom from '../audio/metronom.mp3';
import audiobubanj from '../audio/bubanj.mp3';
import videobubanj from '../video/bubnjevi.mp4';
import audiokor from '../audio/audiokor.mp3';
import audiocan from '../audio/audiocan.mp3';
import audiodin from '../audio/dinamika.mp3';
import audiospring from '../audio/spring.mp3';
import audiosummer from '../audio/summer.mp3';
import audioautumn from '../audio/autumn.mp3';
import audiowinter from '../audio/winter.mp3';
import audiomonofoni from '../audio/monofoni.mp3';
import audiopolifoni from '../audio/polifoni.mp3';
import audiohomofoni from '../audio/homofoni.mp3';


function Obiljezja(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const [audioKor,setAudioKor] = useState(new Audio(audiokor));
    const [audioCan,setAudioCan] = useState(new Audio(audiocan));
    const [audioDin,setAudioDin] = useState(new Audio(audiodin));
    const [audioSpring,setAudioSpring] = useState(new Audio(audiospring));
    const [audioSummer,setAudioSummer] = useState(new Audio(audiosummer));
    const [audioAutumn,setAudioAutumn] = useState(new Audio(audioautumn));
    const [audioWinter,setAudioWinter] = useState(new Audio(audiowinter));
    const [audioMonofoni,setAudioMonofoni] = useState(new Audio(audiomonofoni));
    const [audioPolifoni,setAudioPolifoni] = useState(new Audio(audiopolifoni));
    const [audioHomofoni,setAudioHomofoni] = useState(new Audio(audiohomofoni));
    const [andante,setAndante] = useState('');
    const [presto,setPresto] = useState('');
    const [glasno,setGlasno] = useState('');
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
    function handleMetronom(){
        new Audio(audioMetronom).play();
    }
    const handlePlayKor = () => {
        audioKor.play();
    }

    const handleStopKor = () => {
        audioKor.pause();
    }

    const handlePlayCan = () => {
        audioCan.play();
    }

    const handleStopCan = () => {
        audioCan.pause();
    }

    const handlePlayDin = () => {
        audioDin.play();
    }

    const handleStopDin = () => {
        audioDin.pause();
    }

    const handleSpring = () => {
        audioSpring.play();
    }
    const handleSummer = () => {
        audioSummer.play();
    }
    const handleAutumn = () => {
        audioAutumn.play();
    }
    const handleWinter = () => {
        audioWinter.play();
    }
    const handleMonofoni = () => {
        audioMonofoni.play();
    }
    const handlePolifoni = () => {
        audioPolifoni.play();
    }
    const handleHomofoni = () => {
        audioHomofoni.play();
    }
    
    const handleStop = () => {
        audioSpring.pause();
        audioSummer.pause();
        audioAutumn.pause();
        audioWinter.pause();
        audioMonofoni.pause();
        audioPolifoni.pause();
        audioHomofoni.pause();
    }


    function handleAndante(){
        setAndante('Andante - korakom');
    }
    function handlePresto(){
        setPresto('Presto - vrlo brzo');
    }
    function handleGlasno(){
        setGlasno('Nagli prijelaz p (piano) u f (forte)');
    }

    
    return(
        <div>
            <div className='naslov-lekcija back-blue'>
                <h1 className='stil-tekst'>Obilježja glazbe</h1>
            </div>

            <div className='poruka-lekcija-do-obiljezja back-darkblue pozdrav-obiljezja'>
                <img className='' src={DO} width='280px'></img>
                <div className='tekst-do-obiljezja'>
                <h4 className=''>Glazbi možemo dodijeliti obilježja. <br></br> 
                Mi ćemo navesti <b>7 osnovnih glazbenih obilježja</b> koja možemo prepoznati i primjeniti na sva glazbena djela.</h4>
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

            {/* Ritam */}
            <div className='naslov-lekcija back-blue' id='ritam'>
                <h2 className='stil-tekst'>1.Ritam</h2>
            </div>

            <div className='back-gray stil-tekst obiljezje-opis'>
                <div className='uvod-obiljezja'>
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

            {/* Tempo */}
            <div className='naslov-lekcija back-blue' id='tempo'>
                <h2 className='stil-tekst'>2.Tempo</h2>
            </div>

            <div className='back-gray stil-tekst obiljezje-opis'>
                <div className='uvod-obiljezja'>
                    <p className='tekst-opis'><b className='color-red'>Tempo</b> je <b className='color-green'>brzina izvođenja glazbe</b>.<br></br>
                    <b className='color-yellow'>Doživljaj tempa</b> možemo povezati sa <b className='color-yellow'>otkucajima našeg srca</b>.<br></br> Kada naše srce <b className='color-blue'>normalno kuca</b> onda to doživljavamo kao <b className='color-yellow'>umjereni tempo</b>.<br></br>  
                    Kada skačemo i gibamo se, onda neše srce <b className='color-blue'>kuca brže</b> te to doživljavamo kao <b className='color-red'>brzi tempo</b> i povezujemo sa <b className='color-red'>uzbuđenjem</b>.<br></br>
                    Kada spavamo onda naše srce <b className='color-blue'>sporije kuca</b> i doživljavamo to kao <b className='color-green'>spori tempo</b> te povezujemo sa <b className='color-green'>mirnijim raspoloženjem</b>. 
                    </p>
                </div>
                <div className=''>
                    <p className='tekst-opis'>Razlikujemo nekoliko vrsta tempa. Vrste tempa su većinom talijanskog naziva.<br></br>
                        <i>Sličice prikazuju simboliku vrste tempa.</i>
                    </p>
                </div>
                <div className='tempo-tablica'>
                    <table className='tempo-lenta'>
                        <tr><td colSpan={3}><img className='' src={slow} width='100px'></img></td></tr>
                        <tr><td><b className='color-green'>largo</b></td><td><b className='color-green'>lento</b></td><td><b className='color-green'>adagio</b></td></tr>
                        <tr><td><i>sporo</i></td><td><i>polagano</i></td><td><i>mirno</i></td></tr>
                    </table>
                    <table className='tempo-lenta'>
                        <tr><td colSpan={2}><img className='' src={medium} width='90px'></img></td></tr>
                        <tr><td><b className='color-yellow'>andante</b></td><td><b className='color-yellow'>moderato</b></td></tr>
                        <tr><td><i>korakom</i></td><td><i>umjereno</i></td></tr>
                    </table>
                    <table className='tempo-lenta'>
                        <tr><td colSpan={2}><img className='' src={fast} width='90px'></img></td></tr>
                        <tr><td><b className='color-red'>allegro</b></td><td><b className='color-red'>presto</b></td></tr>
                        <tr><td><i>veselo, brzo</i></td><td><i>vrlo brzo</i></td></tr>
                    </table>
                </div>

                <div className='div-bubanj'>
                    <p className='tekst-opis'>Na slici je prikazan <b>metronom</b> - naprava koja otkucava brzinu izvođenja glazbenog djela.<br></br>
                    Služi glazbenicima za određivanje tempa.<br></br>
                        <i>Pritisni na sličicu i poslušaj otkucavanje metronoma u tri različite brzine.</i>
                    </p>
                    <button onClick={handleMetronom} className="btn-bubanj back-gray"><img className='' src={metronom} width='150px'></img></button>
                </div>

                <p className='tekst-opis'>U nastavku se nalaze dva glazbena djela koje predstavljaju dvije vrste tempa.<br></br>
                <i>Pritiskom na gumb</i><button className='pokreni-zvuk' title='Pokreni'><img className='play-btn' src={play}></img></button> <i>započinje reprodukcija audio sadržaja.</i><br></br>
                Nakon što poslušaš glazbeni primjer pokušaj odgonetnuti koja vrsta tempa karakterizira prvo, a koja drugo glazbeno djelo.<br></br>
                <i>Pritiskom na gumb</i><button className='pokreni-zvuk back-green' title='Odgonetni'><img className='play-btn' src={lupa}></img></button> <i>dobivaš prikaz ispravnog odgovora.</i></p>

                <div className=''>
                    <div className='reprodukcija'>
                        <button className='pokreni-zvuk' title='Pokreni' onClick={handlePlayKor}><img className='play-btn' src={play}></img></button>
                        <button className='pokreni-zvuk' title='Zaustavi' onClick={handleStopKor}><img className='play-btn' src={pause}></img></button>
                        <p className='stil-tekst'>C. Saint-Saens : Karneval životinja - Kornjača</p>
                        <p className='paraf odgovor-tempo'><text className='stil-tekst'><b className='color-yellow'>{andante}</b></text></p>
                        <p className='paraf'><button className='pokreni-zvuk back-green' title='Odgonetni' onClick={handleAndante}><img className='play-btn' src={lupa}></img></button></p>
                    </div>
                    <div className='reprodukcija'>
                        <button className='pokreni-zvuk' title='Pokreni' onClick={handlePlayCan}><img className='play-btn' src={play}></img></button>
                        <button className='pokreni-zvuk' title='Zaustavi' onClick={handleStopCan}><img className='play-btn' src={pause}></img></button>
                        <p className='stil-tekst'>J. Offenbach : Orfej u podzemlju - Can-can</p>
                        <p className='paraf odgovor-tempo'><text className='stil-tekst'><b className='color-red'>{presto}</b></text></p>
                        <p className='paraf'><button className='pokreni-zvuk back-green' title='Odgonetni' onClick={handlePresto}><img className='play-btn' src={lupa}></img></button></p>
                    </div>
                </div>
            </div>

            {/* Dinamika */}
            <div className='naslov-lekcija back-blue' id='dinamika'>
                <h2 className='stil-tekst'>3.Dinamika</h2>
            </div>

            <div className='back-gray stil-tekst obiljezje-opis'>
                <div className='uvod-obiljezja'>
                    <p className='tekst-opis'><b className='color-red'>Dinamika</b> je <b className='color-green'>jačina odnosno glasnoća kojom se izvodi glazba</b>.<br></br>
                    Dinamika je također element u glazbi koji pobuđuje snažan doživljaj u ljudima. <br></br> 
                    Na primjer nagle promjene iz tihog u glasno stvaraju osjećaj iznenađenja.
                    </p>
                </div>
                <div className=''>
                    <p className='tekst-opis'>Razlikujemo nekoliko vrsta dinamike. Vrste dinamike, kao i vrste tempa, imaju talijanske nazive.<br></br>
                        Za označavanje koristimo jednostavne oznake - jedno ili dva slova talijanskog naziva. <br></br>
                    </p>
                    <div className='uvod-obiljezja tablica-dinamika'>
                        <table className='tab-din'>
                            <tr><td><b className='color-green'>pp</b> (tal. <i>pianissimo</i>)</td><td>vrlo tiho</td><td><b className='color-green'>p</b> (tal. <i>piano</i>)</td><td>tiho</td></tr>
                            <tr><td><b className='color-yellow'>mp</b> (tal. <i>mezzopiano</i>)</td><td>srednje tiho</td><td><b className='color-yellow'>mf</b> (tal. <i>mezzoforte</i>)</td><td>srednje glasno</td></tr>
                            <tr><td><b className='color-red'>f</b> (tal. <i>forte</i>)</td><td>glasno</td><td><b className='color-red'>ff</b> (tal. <i>fortissimo</i>)</td><td>vrlo glasno</td></tr>
                        </table>
                    </div>
                </div>
                <p><i>Sličice prikazuju simboliku vrste dinamike.</i></p>
                <div className=''>
                    <img src={dinamika1} width='300px'></img>
                    <img src={dinamika2} width='280px'></img>
                </div>
                <div>
                    <img src={crescendo} width='280px'></img>
                    <img src={decrescendo} width='280px'></img>
                </div>
                <div className='uvod-obiljezja'>
                    <p className='tekst-opis'><b className='color-green'>Cr</b><b className='color-yellow'>es</b><b className='color-red'>cendo</b> označava postupno pojačavanje glazbe.<br></br> 
                    <b className='color-red'>De</b><b className='color-yellow'>cres</b><b className='color-green'>cendo</b> označava postupno stišavanje glazbe.</p>
                </div>

                <p className='tekst-opis'>U nastavku se nalazi glazbeno djelo koje predstavlja vrstu dinamike.<br></br>
                <i>Pritiskom na gumb</i><button className='pokreni-zvuk' title='Pokreni'><img className='play-btn' src={play}></img></button> <i>započinje reprodukcija audio sadržaja.</i><br></br>
                Nakon što poslušaš glazbeni primjer pokušaj odgonetnuti koja vrsta dinamike karakterizira ovo glazbeno djelo.<br></br>
                <i>Pritiskom na gumb</i><button className='pokreni-zvuk back-green' title='Odgonetni'><img className='play-btn' src={lupa}></img></button> <i>dobivaš prikaz ispravnog odgovora.</i></p>

                <div className=''>
                    <div className='reprodukcija'>
                        <button className='pokreni-zvuk' title='Pokreni' onClick={handlePlayDin}><img className='play-btn' src={play}></img></button>
                        <button className='pokreni-zvuk' title='Zaustavi' onClick={handleStopDin}><img className='play-btn' src={pause}></img></button>
                        <p className='stil-tekst'>C. Orff : Carmina burana - br.25 O Fortuna</p>
                        <p className='paraf odgovor-tempo' id='din-odg'><text className='stil-tekst'><b className='color-red'>{glasno}</b></text></p>
                        <p className='paraf'><button className='pokreni-zvuk back-green' title='Odgonetni' onClick={handleGlasno}><img className='play-btn' src={lupa}></img></button></p>
                    </div>
                </div>
            </div>

            {/* Ugođaj */}
            <div className='naslov-lekcija back-blue' id='ugođaj'>
                <h2 className='stil-tekst'>4.Ugođaj</h2>
            </div>

            <div className='back-gray stil-tekst obiljezje-opis'>
                <div className='uvod-obiljezja'>
                    <p className='tekst-opis'><b className='color-red'>Ugođaj</b> glazbe su <b className='color-yellow'>doživljaji koje glazba pobuđuje u nama</b>.<br></br>
                    Raspon osjećaja koje glazba može prenijeti ljudima su od osjećaja <b className='color-green'>radosti, sreće i veselja</b> do osjećaja <b className='color-blue'>straha, tuge, usamljenosti i ogorčenosti</b>. <br></br>
                    Ugođaj možemo smatrati vlastitim dojmom jer se ljudi međusobno razlikuju, no ipak <b className='color-yellow'>većinu osjećaja doživljavamo vrlo slično</b>.
                    </p>
                </div>
                <p className='tekst-opis'>
                    Kako bismo razumjeli što je to ugođaj i kako ga prepoznati u glazbenom djelu, poslušajmo <br></br>četiri glazbena primjera poznatog talijanskog skladatelja <b>Antonia Vivaldija</b>.<br></br>
                    Naziv djela je "<b className='color-yellow'>Četiri godišnja doba</b>".<br></br> Djelo se sastoji od četiri kompozicije koje svojim zvukom dočaravaju četiri godišnja doba.<br></br>
                    Ugođaj glazbe pobuđuje osjećaje u nama koje povezujemo sa pojedinim godišnjim dobom.
                </p>
                <p><i>Pritiskom na sličicu započinje reprodukcija audio sadržaja.</i></p>

                <div className='seasons'>
                    <button onClick={handleSpring} className="btn-bubanj back-gray"><img className='' src={spring} width='300px'></img></button>
                    <button onClick={handleSummer} className="btn-bubanj back-gray"><img className='' src={summer} width='300px'></img></button>
                    <p>Proljeće</p>
                    <p>Ljeto</p>
                    <button onClick={handleAutumn} className="btn-bubanj back-gray"><img className='' src={autumn} width='300px'></img></button>
                    <button onClick={handleWinter} className="btn-bubanj back-gray"><img className='' src={winter} width='300px'></img></button>
                    <p>Jesen</p>
                    <p>Zima</p>
                </div>
                <button className='pokreni-zvuk' title='Zaustavi' onClick={handleStop}><img className='play-btn' src={stop}></img></button>
                
            </div>

            {/* Melodija */}

            <div className='naslov-lekcija back-blue' id='melodija'>
                <h2 className='stil-tekst'>5.Melodija</h2>
            </div>

            <div className='back-gray stil-tekst obiljezje-opis'>
                <div className='uvod-obiljezja'>
                    <p className='tekst-opis'><b className='color-red'>Melodija</b> je <b className='color-green'>niz tonova različitih visina i trajanja koji doživljavamo kao cjelinu</b>.<br></br>
                    Melodije razlikujemo po karakteru, pa tako postoje <b className='color-yellow'>uzlazne ili silazne</b>, <b className='color-blue'>skokovite ili postupne</b>, <b className='color-green'>većeg ili manjeg raspona</b>, <b className='color-red'>dužeg ili kraćeg trajanja</b>.
                    </p>
                </div>
                <p className='tekst-opis'>
                    <b className='color-blue'>Ton</b> je zvuk koji ima određenu visinu, jačinu, trajanje i boju.
                </p>
                <div className='div-river'>
                    <p className='tekst-opis'>
                        Melodiju možemo zamisliti kao <b>rijeku</b>.<br></br> Ona ima početak, tijek i kraj.
                    </p>
                    <img className='rijeka' src={river} width='250px'></img>
                </div>
            </div>
           

            {/* Glazbeni slog */}

            <div className='naslov-lekcija back-blue' id='glazbenislog'>
                <h2 className='stil-tekst'>6.Glazbeni slog</h2>
            </div>

            <div className='back-gray stil-tekst obiljezje-opis'>
                <div className='uvod-obiljezja'>
                    <p className='tekst-opis'><b className='color-red'>Glazbeni slog</b> je <b className='color-green'>broj različitih glasova te odnos među njima</b>.<br></br>
                    Razlikujemo <b className='color-yellow'>jednoglasje i višeglasje</b>.
                    </p>
                </div>

                <p><i>Pritiskom na sličicu započinje reprodukcija audio sadržaja koja karakterizira navedenu vrstu sloga.</i><br></br>
                    <i>Glazbena djela su: G.F.Handel-Mesija,br.42-Zbor Halelujah i grupa Pentatonix-The sound of silence.</i></p>
                <div className='div-river'>
                    <p className='tekst-opis'>
                        <b className='color-blue'>Jednoglasje ili monofoni slog</b><br></br>
                        Izvođenje jedne melodije. <br></br>
                        Možemo zamisliti na primjeru zbora koji pjeva u jedan glas. 
                    </p>
                    <button onClick={handleMonofoni} className="btn-bubanj back-gray"><img className='' src={monofoni} width='250px'></img></button>
                </div>
                <br></br>
                <p className='tekst-opis'><b className='color-blue'>Višeglasje</b><br></br>
                    Izvođenje melodije u više glasova koji istodobno zvuče.<br></br>
                    Razlikujemo dvije vrste višeglasja: <b>melodijsko i akordno višeglasje</b>.
                </p>
                <br></br><br></br>
                <div className='div-river'>
                    <p className='tekst-opis'>
                        <b className='color-green'>Melodijsko višeglasje ili polifoni slog</b><br></br><br></br>
                        Izvođenje <b className='color-yellow'>dvije ili više samostalnih i ravnopravnih melodija</b> (tzv. <b>dionica</b>). <br></br>
                        Možemo zamisliti na primjeru zbora gdje jedan dio zbora pjeva jednu melodiju,<br></br> a drugi dio zbora pjeva drugu melodiju.<br></br>
                        Poseban oblik je <b className='color-blue'>kanonski način izvođenj</b> - izvodi se ista melodija, ali u različito vrijeme.
                    </p>
                    <button onClick={handlePolifoni} className="btn-bubanj back-gray"><img className='' src={polifoni} width='250px'></img></button>
                </div>
                <br></br><br></br>
                <div className='div-river'>
                    <p className='tekst-opis'>
                        <b className='color-yellow'>Akordno višeglasje ili homofoni slog</b><br></br><br></br>
                        Jedan vodeći glas izvodi <b className='color-green'>glavnu, vodeću melodiju</b>, a <b className='color-green'>ostali glasovi su pratnja</b>.                   
                    </p>
                    <button onClick={handleHomofoni} className="btn-bubanj back-gray"><img className='' src={homofoni} width='250px'></img></button>
                </div>
                <button className='pokreni-zvuk' title='Zaustavi' onClick={handleStop}><img className='play-btn' src={stop}></img></button>
            </div>

            {/* Izvođači */}

            <div className='naslov-lekcija back-blue' id='izvodaci'>
                <h2 className='stil-tekst'>7.Izvođači</h2>
            </div>

            <div className='back-gray stil-tekst obiljezje-opis'>
                <div className='uvod-obiljezja'>
                    <p className='tekst-opis'><b className='color-red'>Izvođači</b> su <b className='color-yellow'>pjevači i glazbenici</b> koji svojim vještinama <b className='color-green'>realiziraju</b> odnosno <b className='color-green'>interpretiraju glazbeno djelo</b>.<br></br>
                        Izvođače razlikujemo prema vrsti i broju izvođača.
                    </p>
                </div>
                <p className='tekst-opis'>
                Prema <b className='color-blue'>vrsti izvođača</b> razlikujemo tri oblika glazbe:
                </p>
                
                <div className='div-izvodaci'>
                    <img src={vokalna} width='270px'></img>
                    <img src={instrumentalna} width='300px'></img>
                    <img src={vokinstrument} width='300px'></img>
                    <p><b className='color-yellow'>vokalna</b></p>
                    <p><b className='color-red'>instrumentalna</b></p>
                    <p><b className='color-green'>vokalno-instrumentalna</b></p>
                    <p>samo pjevači</p>
                    <p>samo glazbala</p>
                    <p>pjevači uz pratnju glazbala</p>
                </div>
                
                <p className='tekst-opis'>
                Prema <b className='color-blue'>broju izvođača</b> razlikujemo tri oblika glazbe:
                </p>
                
                <div className='div-izvodaci'>
                    <img src={solist} width='150px'></img>
                    <img src={komorna} width='280px'></img>
                    <img src={orkestralna} width='280px'></img>
                    <p><b className='color-yellow'>solistička</b></p>
                    <p><b className='color-red'>komorna</b></p>
                    <p><b className='color-green'>orkestralna ili zborska</b></p>
                    <p><b>jedan</b><br></br> pjevač ili glazbenik</p>
                    <p><b>manja</b><br></br> skupina pjevača ili glazbala</p>
                    <p><b>velika</b><br></br> skupina pjevača ili glazbala</p>
                </div>
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