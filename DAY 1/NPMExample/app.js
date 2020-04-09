//Taking User Input

//Process.argv
//0 -> node 
//1 -> app.js

//Taking the Input from the User
//Way 1
// var number1 = process.argv[2];
// var number2 = process.argv[3];
// console.log(typeof process.argv[2]);

// var sum = parseInt(number1,10) + parseInt(number2,10);

// console.log(`Sum is ${sum}`);

// //Way 2
var number1 = Number(process.argv[2]);
var number2 = Number(process.argv[3]);
console.log(typeof process.argv[2]);

var sum = (number1) * (number2);

console.log(`Sum is ${sum}`);



//NPM Chalk

// var chalk = require('chalk');
// console.log(chalk.bold.underline.red('Hello GirlScript'));
// console.log('Anything');

// //1 . npm init
// //.2. npm intall <package>
// // 3. implement in our app