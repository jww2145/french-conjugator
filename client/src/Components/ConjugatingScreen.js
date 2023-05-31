import React, {useState, useEffect} from "react";
import GameShow from "./GameShow";

function ConjugatingScreen({wordList, tenses}){
    //Fetch all of the words and the tenses required and put it in an array? Shuffle this array and pass it to Game Show

    const[isReady,setIsReady] = useState(false)
    const[tableSet, setTableSet] = useState(false)
    const[quiz, setQuiz] = useState("test")

    if(tableSet == false){
        let body = ''
        wordList.forEach(word => {
            body += word + ','
        });

        let Strbody = body.replace(/,\s*$/, "");

        fetch('http://127.0.0.1:5000/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"words": Strbody})
        })
        .then(() => setTableSet(true))
        .then(() => {        
                let randomWord = wordList[Math.floor(Math.random() * wordList.length)]
                let randomTense = tenses[Math.floor(Math.random() * tenses.length)]
                fetch(`http://127.0.0.1:5000/word/${randomWord}/${randomTense}`)
                .then(response => response.json())
                .then(data => {let resultArray = data.result; 
                                const resultString = resultArray[1];
                                const resultStringArray = resultString.split(", ");
                                setQuiz(resultStringArray[2]);
                                console.log(quiz);
                                console.log(typeof(resultStringArray[3]))})
            
            })
    }
    
    return(
        <div>
           {isReady ? <GameShow game={quiz}/>: <p> Waiting . . . </p>}
        </div>
    )
}

export default ConjugatingScreen

