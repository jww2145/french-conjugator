import React, {useState, useEffect} from "react";
import GameShow from "./GameShow";

function ConjugatingScreen({wordList, tenses}){

    const[quiz,setQuiz]=useState("")
    const[quizzedInfinitif,setQuizzedInfinitif] = useState("")
    const [correct, setCorrect] = useState(false)


    console.log(quiz)
    
    let randomIndex = Math.floor(Math.random() * wordList.length);
    if(randomIndex == 0){
        randomIndex = 1
    }
    const randomIndex2 = Math.floor(Math.random() * tenses.length)
    const randomTense = tenses[randomIndex2]
    let randomRandomIndex = 0

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/word/${randomIndex}/${randomTense}`)
          .then(response => response.json())
          .then(data => generateQuestion(data))
          .catch(error => console.error(error));
      }, []);

      useEffect(() => {
        fetch(`http://127.0.0.1:5000/word/${randomIndex}/infinitif`)
          .then(response => response.json())
          .then(data => generateInfinitive(data))
          .catch(error => console.error(error));
      }, []);

    function generateQuestion(data){
        let conjugations = JSON.stringify(data)
        let new_conjugation = conjugations.slice(1,-1).replace(/["]+/g, '')
        let conjugation_array = new_conjugation.split(",")
        randomRandomIndex = Math.floor(Math.random() * conjugation_array.length)
        setQuiz(conjugation_array[randomRandomIndex])
        console.log(quiz)
    }

    function generateInfinitive(data){
        let infinitive = JSON.stringify(data)
        let new_infinitive = infinitive.slice(1,-1).replace(/['"]+/g, '')
        setQuizzedInfinitif(new_infinitive)
    }

    return(
        <div>
            <GameShow infinitif={quizzedInfinitif} tense = {randomTense} correct = {correct} setCorrect = {setCorrect} quiz={quiz}/>
        </div>
    )
}

export default ConjugatingScreen

