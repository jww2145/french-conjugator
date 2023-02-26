import React from "react";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


function GameShow({infinitif, tense, correct, setCorrect, quiz}){

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

    const displayTense = dict[tense]

    const conjugationString = quiz.trim();
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
    
    const editor = useEditor({
        extensions: [
          StarterKit,
        ],
        onUpdate({ editor }){
            console.log('this is the quiz ' + quiz)
            const text = editor.getText();
                let check_str = subject + ' ' + text
                let check_str_hyph = subject + text
                if(check_str.trim() ==quiz.trim() || check_str_hyph == quiz){
                    setCorrect(true)
                    console.log("success")
                }

        },
        content: 'Your Answer',
      });


    return(
        <div id="gameshow-box">
            <h1>{infinitif} in {displayTense}</h1>
            <div id = "subject">
                <h1>{subject}</h1>
            </div>
            <EditorContent editor={editor} />
        </div>
    )
}

export default GameShow