import { useState } from "react";
const AddNote = ({ handleAddNote }) => {
    const[noteText,setNoteText] = useState('');
    const[noteHeader,setNoteHeader] = useState('');
    const characterLimit = 400;
    const headerLimit = 10;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length>=0){
            setNoteText(event.target.value);
        }
    };

    const handleChangeHeader = (event) =>{
        if(headerLimit - event.target.value.length>=0){
            setNoteHeader(event.target.value);
        }
    }

    const handleSaveClick= () =>{
        if(noteText.trim().length>0 || noteHeader.trim().length>0){
            handleAddNote(noteHeader,noteText)
            setNoteText('');
            setNoteHeader('');
        }
    };

    return(
        <div>
            <div className = 'note-header new'> 
                <textarea 
                    className = 'input-header'
                    placeholder ='Header'
                    value = {noteHeader}
                    onChange = {handleChangeHeader}
                    rows='1'
                ></textarea>
            </div>
            <div className="note new">
                <textarea className = "input-note"
                    rows='8' 
                    cols = '10' 
                    placeholder ='Type to add a note.'
                    value ={noteText}
                    onChange = {handleChange}
                ></textarea>
            
                </div>
                <div className = 'note-footer new'>
                    <small>{characterLimit - noteText.length} Remaining</small>
                    <button className ='save' onClick={handleSaveClick}>Save</button>
                </div>
            </div>
    );
};
export default AddNote;