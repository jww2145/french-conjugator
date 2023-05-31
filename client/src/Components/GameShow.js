import React, {useState} from "react";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


function GameShow({quiz}){

    console.log(quiz)

    let randomTense = Math.floor(Math.random() * quiz.length)
    let randomSubject = Math.floor(Math.random() * 6)
    let quizzed_tense = quiz[randomTense][0]
    let quizzed_infinitif = quiz[randomTense][1]
    let quizzed_question = quiz[randomTense][2].split(",")[randomSubject]

    console.log(quizzed_infinitif + " " + quizzed_tense + " " + quizzed_question)

    var dict = {
        indicatif_present: "Present  (Indicatif)",
		indicatif_passeSimple: "Passé Simple (Indicatif)",
		indicatif_imparfait: "Imparfait (Indicatif)",
		indicatif_passeCompose: "Passé Composé (Indicatif)",
		indicatif_futurSimple: "Futur Simple (Indicatif)",
		indicatif_passeAnterieur: "Passé Anterieur (Indicatif)",
		indicatif_plusQueParfait: "Plus-Que-Parfait (Indicatif)",
		indicatif_futurAnterieur: "Futur Anterieur (Indicatif)",
		subjonctif_present: "Present (Subjonctif)",
		subjonctif_passe: "Passé (Subjonctif)",
		subjonctif_imparfait: "Imparfait (Subjonctif)",
		subjonctif_plusQueParfait: "Plus-Que-Parfait (Subjonctif)",
		conditionnel_present: "Present (Conditionnel)",
		conditionnel_passe1reForme: "Passé 1re Forme (Conditionnel)",
		conditionnel_passe2eForme: "Passé 2e Forme (Conditionnel)",
    }

    const displayedTense = dict[quizzed_tense]

    const conjugationString = quizzed_question.trim();
    
    const space = conjugationString.indexOf(" ")
    const appostrophe = conjugationString.indexOf("'")
    let splitIndex = 0
    
    if(space > 0 && appostrophe > 0){
        splitIndex = Math.min(space,appostrophe)
    }
    else if(space > 0 && appostrophe < 0){
        splitIndex = space
    }
    else if(space < 0 && appostrophe > 0){
        splitIndex = appostrophe
    }
    else{
        splitIndex = space
    }
    const subject = conjugationString.slice(0, splitIndex);
    
    console.log(subject)
    
    const editor = useEditor({
        extensions: [
          StarterKit,
        ],
        content: 'Your Answer',
      });


    return(
        <div id="gameshow-box">
          
                <EditorContent editor={editor} />
        </div>
    )
    }
export default GameShow