import React,{useState} from 'react'
{/*Yeni not eklemek için component*/}
function AddNote({handleAddNote}) {

    const [noteText,setNoteText] = useState('');
    // Yazı Karakter sayısını 300 ile sabitledim
    const charLimit = 300;
    
    const handleChange =(event)=>{
   {/*Yazarken kalan kelime sayısını gösterme*/}
    if(charLimit - event.target.value.length>=0){
        setNoteText(event.target.value)
    }
   
    }
    
    
    const handleSaveClick =() =>{
    {/*Eğer input içerisinde karakter yoksa kaydetmeyeceğiz*/}
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
       
    }
    return (
        <div className="note new">
        {/*İnputlar için bir textarea*/}
            <textarea  cols="10" rows="8" placeholder="Yeni bir not eklemek için tıklayınız .."
            onChange={handleChange} value={noteText}
            ></textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Kelime Kaldı</small>
                <button className="save" onClick={handleSaveClick}>Kaydet</button>
            </div>
        </div>
    )
}

export default AddNote