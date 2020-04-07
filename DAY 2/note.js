var fs = require('fs');

var fetchNote = () =>{
    try{
        var readPreviousNotes = fs.readFileSync('notes-data.json');
        return JSON.parse(readPreviousNotes); //
    }catch(e){
        return [];
    }
}

var takeNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title , body) => {
    var notes = fetchNote();
    var note ={
        title ,
        body 
    }

    notes.push(note);
    takeNote(notes);
    return note;
    // console.log('Adding a Note ' , title , body);
};

var listNotes = () => {
    console.log('Reading All Notes');
    
    var getAllNotes = fetchNote();
    return getAllNotes;
}

module.exports = {
    addNote,
    listNotes
};