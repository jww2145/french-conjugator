import React,{useEffect, useState} from "react";
import ConjugatingScreen from "./ConjugatingScreen";

function Waiting({wordList, tenses}){
    const [isLoading, setIsLoading] = useState(true)


    const bodies = []
    console.log(wordList)

    for(let i = 0; i < wordList.length; i++){
        bodies.push({body: {"word": wordList[i]}})
    }


    conjugate(bodies)

    function conjugate(bodies){
        if (bodies.length === 0) {
            setIsLoading(false)
            return Promise.resolve();
        }
        const body = bodies.shift(); 

    
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
            return conjugate(bodies);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }


    return(
        <div>
            {isLoading ? <p>Loading...</p> : <ConjugatingScreen wordList={wordList} tenses = {tenses}/>}

        </div>
    )
}

export default Waiting