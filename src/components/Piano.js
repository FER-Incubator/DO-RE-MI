import React from "react";
import { Key } from './Key.js';
import {Link} from "react-router-dom";




import '../design/Piano.css'
import keyboard from '../images/keyboard.png';
import _ from 'lodash';
import {KEY_TO_NOTE, NOTES} from "../global/constants.js";
import { VALID_KEYS } from "../global/constants.js";

class Piano extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }

    playNote = (note) => {
        if(!_.isEmpty(note)){
            const noteAudio = new Audio(`../../notes/${note}.mp3`)
            noteAudio.play();
        }
    }



    handleKeyDown = (event) => {
        if(event.repeat){
            return;
        }
        const key = event.key;
        const updatedPressedKeys = [...this.state.pressedKeys];
        if(!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)){
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        this.playNote(KEY_TO_NOTE[key]);
    }

    handleKeyUp = (event) => {
        const index = this.state.pressedKeys.indexOf(event.key);
        if(index > -1){
            this.setState(state => ({
                pressedKeys: state.pressedKeys.splice(index, 1)
            }));
        }
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render(){
        const keys = _.map(NOTES, (note, index) => {
            return (
                <Key key={index}
                     note={note}
                     pressedKeys={this.state.pressedKeys}
                ></Key>
            );
        });

        /*
        const audioFiles = _.map(NOTES, (note, index) => {
            return (
                <audio>
                    id={note}
                    key={index}
                    src={'../../notes/a.mp3'}
                </audio>
            );
        }); */

        const scrollToTop = () => {
            window.scrollTo(0, 0)
        }
        
        return(
            <div className="glavnidiv_klav stil-tekst">
                <h3 className='stil-tekst'>Upute</h3>
                <p className="uputstva"><i>Pritiskom tipki na tipkovnici reproducira se zvuk klavijature.</i><br></br>
                    <i>Potrebne su ti sljedeće tipke na tipkovnici:</i><br></br>
                    <img src={keyboard} width="300px"></img>
                </p>
                <div className="naslovnidiv_klav">
                    <h1>Klavijatura</h1>
                </div>
                
                <div className="piano">
                    {keys}
                </div>
                <div className="povratak-div">
                    <a onClick={scrollToTop}><Link to='/igraonica' ><button className='kreni-btn next-btn'>&#171; Povratak: Igraonica</button></Link></a>
                </div>
                
            </div>
        );
    }



}

export { Piano };