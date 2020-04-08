console.log('Starting the Code');

setTimeout(() => {
    console.log('Inside Callback 1');
}, 2000);

setTimeout(() => {
    console.log('Inside Callback 2');
}, 0);

console.log('Finishing the code');




// var getSum = ( a , b) => {
//     c = a+b;
//     return c;
// }

// var res = getSum(2 , 3);
// console.log(`Sum is ${res}`);



// var a = 22;
// var b = a + 13;
// console.log(`Sum is ${b}`);
