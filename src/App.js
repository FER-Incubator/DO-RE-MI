import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Classroom from './components/Classroom';
import Quiz from './components/Quiz';
import Fun from './components/Fun';
import Header from './components/Header';
import Footer from './components/Footer';

function App(){

  return(
    <BrowserRouter>
    <Header/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ucionica' element={<Classroom/>}/>
          <Route path='/kviz' element={<Quiz/>}/>
          <Route path='/igraonica' element={<Fun/>}/>
        </Routes>
      </div>
    <Footer/>
    </BrowserRouter>
  )

}

export default App;

