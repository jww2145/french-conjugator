import React, { useState, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.css';


function WordCard({word, setWord, cards, setCards, wordList, setWordList}){
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
        onUpdate({ editor }) {
            setWord(editor.getText())
          },
          onBlur({ editor, event }) {
            wordList.push(word)
            console.log(wordList)
        },
        content: '<p>Word . . .</p>',
      })


    return(
        <div>
            <div id='wordCard'>
                <div id="editor">
                    <EditorContent editor={editor} />
                </div>
                <div id="icon">
                    <Grid container sx={{ color: "text.primary" }} >
                        <Grid item xs={1}>
                            <DeleteIcon/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default WordCard;