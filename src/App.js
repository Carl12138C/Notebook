import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import NotesList from './component/NotesList';
import Search from './component/Search';
import Header from './component/Header';
const App = () =>{
    let[notes,setNotes] = useState([
        {
            id: nanoid(),
            header: "Default",
            text:"This is the default note.",
            date:"XX/XX/XXXX",
        },
    ]);

    const[searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
        );

        if(savedNotes){
            setNotes(savedNotes);
        }
    },[]);

    useEffect(()=>{
        const savedDarkMode = JSON.parse(localStorage.getItem('react-notes-app-data-dark-mode')
        );

        if(savedDarkMode){
            setDarkMode(savedDarkMode);
        }
    },[]);

    useEffect(()=> {
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
    },[notes]);

    useEffect(()=> {
        localStorage.setItem('react-notes-app-data-dark-mode', JSON.stringify(darkMode));
    },[darkMode]);

    
    const addNote =(header,text) =>{
        const date = new Date();
        let newNote = {
            id: nanoid(),
            header: header,
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes =[...notes, newNote];
        setNotes(newNotes);
    }
    
    const deleteNote = (id) =>{
        const newNotes = notes.filter((note)=> note.id !== id);
        setNotes(newNotes);
    }
    const editNote =(id, header, text, date) =>{
        let newNote ={
            id:id,
            header:header,
            text:text,
            date:date
        };
        var index = notes.findIndex(note=> note.id === id);
        const newNotes = JSON.parse(JSON.stringify(notes));
        newNotes.splice(index,1,newNote);
        setNotes(newNotes);
    }

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
                <div className='container'>
                <Header handleToggleDarkMode = {setDarkMode }/>
                <Search handleSearchNote ={setSearchText}/>
                <NotesList 
                    notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
                    handleAddNote = {addNote} 
                    handleDeleteNote = {deleteNote}
                    handleEditNote = {editNote}
                />
            </div>
        </div>
    
    );
};
export default App;