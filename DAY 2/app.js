var yargs = require('yargs');

var notes = require('./note.js');

var argv = yargs
.command('add' , 'Adding a note' ,{
   title : {
       describe : 'Title of Note',
       demand : true,
       alias : 't'
   },
   body : {
    describe : 'Body of Note',
    demand : true,
    alias : 'b'
   } 
})
.command('list' , 'Listing all Notes')
.help()
.argv;

//add list
var command = argv._[0];
// console.log('Process :' ,process.argv);
// console.log('Yargs :' , argv);



console.log('Command : ',command);

if(command === 'add'){
    // console.log('Adding a note');
    var addedNote = notes.addNote(argv.title , argv.body);
    console.log('Note Added :' ,addedNote);
    
}else if(command === 'list'){
    // console.log('Listing all Notes');
    var readNotes = notes.listNotes();
    console.log(readNotes);
    

}else{

    console.log('Wrong Command');
}
