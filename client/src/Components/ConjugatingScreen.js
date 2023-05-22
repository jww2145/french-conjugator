import React, {useState, useEffect} from "react";
import GameShow from "./GameShow";

function ConjugatingScreen({wordList, tenses}){
    //Fetch all of the words and the tenses required and put it in an array? Shuffle this array and pass it to Game Show

    const urls = [] 
    let quiz_array = []
    const[isReady,setIsReady] = useState(false)


    for (let i = 0; i < wordList.length; i++){
        for (let j = 0; j < tenses.length; j++){
            quiz_array.push([tenses[j]])
            urls.push(`http://127.0.0.1:5000/word/${wordList[i]}/${tenses[j]}`)
        }
    }

    generateQuiz(urls)

    let counter = 0
    function generateQuiz(){
        if(urls.length === 0){
            setIsReady(true)
            return Promise.resolve()
        }
        const url = urls.shift()

        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            quiz_array[counter].push(data[0])
            quiz_array[counter].push(data[1])
            counter += 1
            return generateQuiz(urls)})
        .catch(error => {
            console.error('Error:', error);
    });
    }
    
    console.log(quiz_array)

    return(
        <div>
           {isReady ? <GameShow quiz = {quiz_array}/> : <p> Waiting . . . </p>}
        </div>
    )
}

export default ConjugatingScreen

