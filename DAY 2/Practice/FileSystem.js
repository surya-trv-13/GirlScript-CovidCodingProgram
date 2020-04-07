var fs =  require('fs'); //

var text ='Anything';


//Fun 1
fs.writeFileSync('notes-data' , text);

//Fun 2
var stringInFile = fs.readFileSync('notes-data', 'utf8');
console.log('String We Read is ', stringInFile);

//fun 3
text = 'Something whic is to write in file';
fs.appendFileSync('notes-data' , text);
