import { useState } from "react";
const EditNote = ({id, text, header, date, handleEditNote}) =>{
    const[noteText,setNoteText] = useState(text);
    const[noteHeader,setNoteHeader] = useState(header);
    const handleChangeText = (event) => {
            setNoteText(event.target.value);
    };

    const handleChangeHeader = (event) =>{
            setNoteHeader(event.target.value);
    }

    const handleSaveClick= () =>{
        if(noteText.trim().length>0 || noteHeader.trim().length>0){
            handleEditNote(id,noteHeader,noteText,date)
            
        }
    };
    return(
        <div>
            <div className="edit-header">
                <textarea 
                className="edit-header-input"
                value={noteHeader}
                rows='1'
                onChange={handleChangeHeader}
                ></textarea>
            </div>
            <div className="edit-note">
                <textarea
                    className="edit-note-inpit"
                    placeholder="hi"
                    value={noteText}
                    rows='1'
                    onChange={handleChangeText}
                ></textarea>
            </div>
            <button 
                className="edit-save"
                onClick={handleSaveClick}
            >Save</button>
        </div>
    );
}

export default EditNote;