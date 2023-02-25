import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import WordCard from './Components/WordCard.js'

function App() {

  const [wordList, setWordList] = useState([])
  const [cards, setCards] = useState(1)
  const [word,setWord]= useState('')

  function makeNewCard(){
    setCards(cards+1)
  }

  const flashcards = [];
  for (let i = 0; i < cards; i++) {
    flashcards.push(
      <WordCard word={word} setWord={setWord} wordList = {wordList} setWordList = {setWordList} cards = {cards} setCards = {setCards}/>
    );
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
          Test
        </div>
      </div>
    </div>
  );
}

export default App;
