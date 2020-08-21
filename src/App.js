import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import Figure from './Components/Figure'
import WrongLetters from './Components/WrongLetters'
import Word from './Components/Word'
import Notification from './Components/Notification'
import Popup from './Components/Popup'
import {showNotification as show } from './Helpers/helpers'

const word = ['pokemon','programming','pikachu','virus','noob']

let selectedWord = word[Math.floor(Math.random() * word.length )]

function App() {

const [correctLetters, setCorrectLetters] = useState([]) 
const [wrongLetters, setWrongLetters] = useState([]) 
const [showNotification,setShowNotification] = useState(false)


useEffect(()=>{
 const handleKeyDown = e =>{
   const {key, keyCode} = e
   if(keyCode >=65 && keyCode <=90){
    const letter = key
    if(selectedWord.includes(letter)){
        if(!correctLetters.includes(letter)){
            setCorrectLetters(correctLetters => [...correctLetters, letter])
        }else{
            show(setShowNotification)
        }
    }else{
        if(!wrongLetters.includes(letter)){
          setWrongLetters(wrongLetters => [...wrongLetters, letter])
        }else{
          show(setShowNotification)
        }
    }
  }
 }
 window.addEventListener('keydown',handleKeyDown)
 return () =>window.removeEventListener('keydown',handleKeyDown)
},[correctLetters,wrongLetters])

function playAgain() {

  // Empty Arrays
  setCorrectLetters([]);
  setWrongLetters([]);

  const random = Math.floor(Math.random() * word.length);
  selectedWord = word[random];
}


  return (
    <div className="App">
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} playAgain={playAgain} />
      <Notification showNotification = {showNotification} />
    </div>
  );
}

export default App;
