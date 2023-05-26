import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import WordCard from './Components/WordCard.js'
import TenseLibrary from './Components/TenseLibrary';

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
      <WordCard key = {i} wordList = {wordList} setWordList = {setWordList} conjugatin = {conjugatin} cards = {cards} setCards = {setCards}/>
    );
  }

  function handleClick(){
    makeTable() 
  }


  function makeTable(){
    fetch('http://127.0.0.1:5000/create')
    .then(() => setConjugatin(true))
  }

  


  return (
    <div className="Home">

      <h1> French Conjugator </h1>

      <div id="homeBox">
        <div id="wordDisplay">
          {flashcards}
          <button onClick={() => makeNewCard()}>New Word</button>
        </div>

        <div id="tenseDisplay">
          <TenseLibrary tenses={tenses} setTenses = {setTenses}/>
        </div>

      <div id = "conjugateButton">
        <button onClick={handleClick}>Conjugate!</button>
      </div>
      </div>
    </div>
  );
}
export default App;
