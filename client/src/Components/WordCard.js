import React, { useState, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import '../App.css';


function WordCard({wordList, setWordList, cards, setCards}){

    let newList = wordList
    useEffect(() => {
        function handleTab(e) {
          if (e.keyCode === 9) {
            setCards(cards+1)
          }
        }
        
    
        document.addEventListener('keydown', handleTab);
    
        return () => {
          document.removeEventListener('keydown', handleTab);
        };
    }, []);

    const editor = useEditor({
        extensions: [
          StarterKit,
        ],
        onBlur({ editor }){
          newList.push(editor.getText())
          setWordList(newList)
          console.log(newList)
        },

        content: 'Insert Word',
      })


    return(
        <div>
            <div id='wordCard'>
                <div id="editor">
                    <EditorContent editor={editor} />
                </div>
            </div>
        </div>
    )
}

export default WordCard;