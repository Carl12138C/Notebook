import Note from './Note';
import AddNote from'./AddNote';
const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) =>{
    return (
        <div className ='notes-list'> 
        {notes.map((notes)=>(
            <Note 
            id={notes.id}
            header = {notes.header} 
            text={notes.text} 
            date={notes.date}
            handleDeleteNote = {handleDeleteNote}
            handleEditNote = {handleEditNote} 
            />
        ))}
        <AddNote
            handleAddNote={handleAddNote} 
            />
    </div>
    );

};

export default NotesList;