import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {QuizProvider} from "./contexts/quiz";
import Quiz from "./components/Quiz";


ReactDOM.render(
    <App />,
    document.getElementById('root')
);


