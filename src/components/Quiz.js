import React, {useContext, useState} from 'react';
import {QuizContext} from "../contexts/quiz";
import Question from "./Question";
import '../design/Quiz.css';
import RE from '../images/RE.png';

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    console.log('quizState', quizState);
    console.log('Tocnih odgovora: ', quizState.correctAnswerCount);

    const brPitanja = 7;

    var gumbTekst = "Iduće pitanje";
    if(quizState.currentQuestionIndex === brPitanja-1){
        gumbTekst = "Završi kviz";
    }

    var zavrsnaPoruka = "Odlično";
    if(quizState.correctAnswerCount === 0){
        zavrsnaPoruka = "Pogledaj ponovo lekcije, pa se vrati"
    }else if(quizState.correctAnswerCount>0 && quizState.correctAnswerCount<brPitanja/2){
        zavrsnaPoruka = "Možeš ti i bolje";
    }else if(quizState.correctAnswerCount>=brPitanja/2 &&
                quizState.correctAnswerCount<brPitanja){
        zavrsnaPoruka = "Super, još ti malo fali da sve znaš";
    }else{
        zavrsnaPoruka = "Odlično, ti si sve naučio/la";
    }

    return(
        <div>
            <div className='div-zvuk back-red'>
            <img className='' src={RE} width='280px'></img>
                <p className='poruke-zvuk'>
                <h2>Dobrodošli u kviz!</h2>
                <h4 className='tekst-align color-white'>Nakon što ste proučili sve lekcije, vrijeme je da se okušate u mojim zagonetnim i zanimljivim pitanjima.<br></br>
                Kada ste spremni krenite sa rješavanjem pitanja.</h4>
                <h4 className='color-white'>Ukoliko nije dobar rezultat kviza, glavu gore i prođite još jednom po lekcijama.<br></br>
                Nakon ponavljanja sigurna sam da ćete uspješno rješiti moja zagonetna pitanja.</h4>
                <h4 className='color-white'>Imate neograničeni broj pokušaja rješavanja kviza!</h4>
                <h3>SRETNO!</h3>
                </p>
            </div>
            <div className="quiz">
                {quizState.brojPitanja === brPitanja && (
                    <div className="results">
                        <div className="congratulations">{zavrsnaPoruka}</div>
                        <div className="results-info">
                            <div>Završio si sa kvizom.</div>
                            <div>
                                Imaš <b>{quizState.correctAnswerCount}</b> od{" "}
                                <b>{brPitanja}</b> točnih odgovora.
                            </div>
                            <div className="next-button"
                                onClick={() => dispatch({type: "RESTART"})}
                            >
                                Pokušaj ponovo
                            </div>
                        </div>
                    </div>
                )}
                {quizState.brojPitanja < brPitanja && (
                    <div>
                        <div className="score">
                            Pitanje {quizState.currentQuestionIndex + 1}/{brPitanja}
                        </div>
                        <Question />
                        <div
                            className="next-button"
                            onClick={() => dispatch({type: 'NEXT_QUESTION'})}
                        >
                            {gumbTekst} &#187;
                        </div>
                    </div>
                )}
            </div>
        </div>
        
    )
};
export default Quiz;