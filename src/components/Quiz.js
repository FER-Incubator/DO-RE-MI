import React, {useContext, useState} from 'react';
import {QuizContext} from "../contexts/quiz";
import Question from "./Question";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    console.log('quizState', quizState)
    return(
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Odlično!</div>
                    <div className="results-info">
                        <div>Završio si sa kvizom.</div>
                        <div>
                            Imaš {quizState.correctAnswerCount} od{" "}
                            {quizState.questions.length} točnih odgovora.
                        </div>
                        <div className="next-button"
                             onClick={() => dispatch({type: "RESTART"})}
                        >
                            Pokušaj ponovo
                        </div>
                    </div>
                </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className="score">
                        Pitanje {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
                    </div>
                    <Question />
                    <div
                        className="next-button"
                        onClick={() => dispatch({type: 'NEXT_QUESTION'})}
                    >
                        Iduće pitanje
                    </div>
                </div>
            )}

        </div>
    )
};
export default Quiz;