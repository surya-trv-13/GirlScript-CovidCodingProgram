// var sum = 1+2;

// console.log(`Sum is ${sum}`);


console.log('GirlScript');


//Main Module
// var square = require('./square');

// console.log(square.isCalledDirectly);

// console.log(require.main === module);





//OS Module
// var os = require('os');

// var user = os.userInfo();

// console.log(user.username);


//Object Destructuring
const {areaFunction} = require('./square.js');
console.log(areaFunction(7));

//Object Destructuring way 2
const {area} = require('./square.js');
console.log(area(7));
