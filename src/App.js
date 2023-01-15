import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Classroom from './components/Classroom';
import Zvukovi from './components/Zvukovi';
import Obiljezja from './components/Obiljezja';
import Izvodaci from './components/Izvodaci';
import Note from './components/Note';
import Pjesme from './components/Pjesme';
import Povijest from './components/Povijest';
import Quiz from './components/Quiz';
import Fun from './components/Fun';
import Header from './components/Header';
import Footer from './components/Footer';
import {QuizProvider} from "./contexts/quiz";
import Memory from './components/Memory';


function App(){

  return(
    <BrowserRouter>
    <Header/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ucionica' element={<Classroom/>}/>
          <Route path='/ucionica/lekcija-1-zvukovi' element={<Zvukovi/>}/>
          <Route path='/ucionica/lekcija-2-obiljezja' element={<Obiljezja/>}/>
          <Route path='/ucionica/lekcija-3-izvodaci' element={<Izvodaci/>}/>
          <Route path='/ucionica/lekcija-4-note' element={<Note/>}/>
          <Route path='/ucionica/lekcija-5-pjesme' element={<Pjesme/>}/>
          <Route path='/ucionica/lekcija-6-povijest' element={<Povijest/>}/>
          <Route path='/kviz' element={
            <QuizProvider>
              <Quiz />
            </QuizProvider>
          }/>
          <Route path='/igraonica' element={<Fun/>}/>
          <Route path='/igraonica/memory' element={<Memory/>}/>
        </Routes>
      </div>
    <Footer/>
    </BrowserRouter>
  )

}

export default App;

