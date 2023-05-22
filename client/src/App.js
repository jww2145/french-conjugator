import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import WordCard from './Components/WordCard.js'
import TenseLibrary from './Components/TenseLibrary';
import Waiting from './Components/Waiting';

function App() {
  const [cards, setCards] = useState(1)
  const [wordList, setWordList] = useState([])
  //tense states
  const[tenses,setTenses] = useState([])
  const[conjugatin, setConjugatin] = useState(false)
  

  function makeNewCard(){
    setCards(cards+1)
  }

  const flashcards = [];

  for (let i = 0; i < cards; i++) {
    flashcards.push(
      <WordCard wordList = {wordList} setWordList = {setWordList} cards = {cards} setCards = {setCards}/>
    );
  }


  function makeTable(){
    fetch('http://127.0.0.1:5000/create')
    .then(() => setConjugatin(true))
  }



  return (
    <div className="Home">

      <h1> French Conjugator </h1>

      {!conjugatin ?<div id="homeBox">
        <div id="wordDisplay">
          {flashcards}
          <button onClick={() => makeNewCard()}>New Word</button>
        </div>

        <div id="tenseDisplay">
          <TenseLibrary tenses={tenses} setTenses = {setTenses}/>
        </div>

      <div id = "conjugateButton">
        <button onClick={makeTable}>Conjugate!</button>
      </div>
      </div>:
      <Waiting wordList={wordList} tenses = {tenses}/>}
    </div>
  );
}
export default App;
