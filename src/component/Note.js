import { useState } from "react";
import{ MdDeleteForever } from "react-icons/md";
import EditNote from "./EditNote";

const Note = ({id,header,text,date, handleDeleteNote, handleEditNote}) =>{
    const [isOpen,setIsOpen] = useState(false);
    return (
    <div>
        <div className='note-header' onClick= {()=>setIsOpen(true)}>{header}</div>
        <div className='note' onClick= {()=>setIsOpen(true)} >
            <span>{text}</span>
        </div>
        <div className = 'note-footer' onClick= {()=>setIsOpen(true)}>
                <small>{date}</small>
                <MdDeleteForever 
                    onClick = {() => handleDeleteNote(id)} 
                    className = 'delete-icon' 
                    size = '1.3em' 
                    />    
        </div>
        {isOpen&&(
            <div className = 'modal'>
                <div className = 'overlay' onClick= {()=>setIsOpen(false)} ></div>
                <div className = "modal-content">
                    <EditNote 
                    id = {id}
                    header ={header}
                    text = {text}
                    date = {date}
                    handleEditNote = {handleEditNote}/>

                    <button className = 'close-modal' onClick= {()=>setIsOpen(false)}> Close </button>
            </div>

        </div>
        )} 
    </div>
    );  
};

export default Note;