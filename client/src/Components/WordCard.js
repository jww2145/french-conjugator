import React, {useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Spacer from './Spacer';
import '../App.css';


function WordCard({wordList, setWordList, cards, conjugatin, setCards}){
  // Make a new list that is a replica of wordList, except the i-th entry is empty
  // On Blur, do newList[i] = newWord 
  // setWordList(newList)
  
  let newList = wordList

  /*
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
    */

    const editor = useEditor({
        extensions: [
          StarterKit,
        ],
        onBlur({ editor }){
          let word = editor.getText()
          newList.push(word)
          setWordList(newList)
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
            <Spacer/>
        </div>
    )
}

export default WordCard;