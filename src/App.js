import React, {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import NotesList from './components/NotesList';
import Search from './components/Search';

function App () {
    
        const [notes, setNotes] = useState ([
            {
                id: nanoid(),
                text: "First text",
                date: "21.03.22"
            }
                ,
            {
                id: nanoid(),
                text: "Second text",
                date: "22.03.22"
            }
                ,
            {
                id: nanoid(),
                text: "Third text",
                date: "23.03.22"
            }
        ]);

    
        const [searchNote, setSearchNote] = useState('');

        const [darkMode, setDarkMode] = useState(false);

        // Local Storage a sayfa kapandıktan sonra kaydolması için

        useEffect(()=> {
            const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

            if(savedNotes) {
                setNotes(savedNotes)
            }
        },[])

        // App data yı local storage a kaydetmek için

        useEffect(()=>{
            localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
        },[notes])

        // Yeni not eklemek için fonksiyon ekliyorum

        const addNote = (text) => {
            const date = new Date();
            const newNote = {
                id:nanoid(),
                text : text,
                date: date.toLocaleDateString()
            }

            const newNotes = [...notes, newNote]
            setNotes(newNotes)
        }

        // İd ile birlikte bir notu silmek için fonksiyon oluşturuyorum

        const deletingNote = (id) => {
            const newNotes = notes.filter((note) => note.id!==id);
            setNotes(newNotes)
        }

        return (
            <div className={`${darkMode && 'dark-mode'}`}>
                <div className='container'>

                <Header handleToggleDarkMode={setDarkMode} />

                <Search handleSearch = {setSearchNote} />

                <NotesList notes={notes.filter((note)=>note.text.toLocaleLowerCase().includes(searchNote))} handleAddNote={addNote} handleDelete={deletingNote}/>


                </div>



            </div>
        )


}

export default App