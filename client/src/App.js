import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import WordCard from './Components/WordCard.js'
import TenseLibrary from './Components/TenseLibrary';
import ConjugatingScreen from './Components/ConjugatingScreen'

function App() {
  const [cards, setCards] = useState(1)
  const [wordList, setWordList] = useState([])
  const [data, setData] = useState('');
  console.log(data)
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


  function makeBodies(){
    const bodies = []
    for(let i = 0; i < wordList.length; i++){
      bodies.push({body: {word: wordList[i]}})
    }

    conjugate(bodies)
      .then(() => console.log('All post requests have been made.'))
      .then(() => setConjugatin(true))
  }

  function conjugate(bodies){
    if (bodies.length === 0) {
      return Promise.resolve();
    }

    const body = bodies.shift(); // Get the next body
    console.log(body.body)
    
    return fetch('http://127.0.0.1:5000/update', {
      method: 'POST',
      body: JSON.stringify(body.body),
      headers: {
        'Content-Type': 'application/json' 
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Make the next request in the chain
      return conjugate(bodies);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }


  return (
    <div className="Home">

      <h1> French Conjugator </h1>

      {!conjugatin?<div id="homeBox">
        <div id="wordDisplay">
          {flashcards}
          <button onClick={() => makeNewCard()}>New Word</button>
        </div>

        <div id="tenseDisplay">
          <TenseLibrary tenses={tenses} setTenses = {setTenses}/>
        </div>

      <div id = "conjugateButton">
        <button onClick={makeBodies}>Conjugate!</button>
      </div>
      </div>:
      <ConjugatingScreen wordList={wordList} tenses = {tenses}/>}
    </div>
  );
}

export default App;
