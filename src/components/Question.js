import {useContext} from "react";
import {QuizContext} from "../contexts/quiz";
import Answer from "./Answer";
import '../design/Quiz.css'

import slika from '../../src/images/Instrumenti_slike/fagot.png';
import pixel from '../../src/images/Kviz_slike/pixel.png';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]

    var tekstPitanja = currentQuestion.question;
    var sirinaSlike = 0;
    var srcSlika = "/img/pixel.png";


    /*Provjera je li slikovno pitanje*/
    if(tekstPitanja === "FAGOT"){
        tekstPitanja = "Koji se instrument nalazi na slici?";
        srcSlika = "/img/fagot.png";
        sirinaSlike = 250;
    }else if(tekstPitanja === "METRONOM"){
        tekstPitanja = "Kako zovemo ovaj uređaj?";
        srcSlika = "/img/metronom.png";
        sirinaSlike = 250;
    }else if(tekstPitanja === "CELO"){
        tekstPitanja = "Koji instrument se nalazi na slici?";
        srcSlika = "/img/celo.png";
        sirinaSlike = 250;
    }else if(tekstPitanja == "NOTA"){
        tekstPitanja = "Koja je nota prikazana na slici?";
        srcSlika = "/img/nota_osm.png";
        sirinaSlike = 150;
    }




    return (
        <div className="quiz-question">
            <div className="question">{tekstPitanja}
                <img src={srcSlika} width={sirinaSlike}></img>
            </div>
            <div className="answers">
                {quizState.answers.map((answer, index) => (
                    <Answer
                        answerText = {answer}
                        key={index}
                        index={index}
                        currentAnswer={quizState.currentAnswer}
                        correctAnswer={currentQuestion.correctAnswer}
                        onSelectAnswer={(answerText) =>
                            dispatch({type: "SELECT_ANSWER", payload: answerText})
                        }
                    />
                ))}
            </div>
        </div>
    )
};

export default Question;