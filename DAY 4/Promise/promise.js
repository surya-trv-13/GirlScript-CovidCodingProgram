//Advanced Promise
//Promise Chaining 
//Error Handling
var getAddition = (num1 , num2) => {
    return new Promise((resolve , reject)=>{
        if(typeof num1 === 'number' && typeof num2 === 'number') {
            resolve(num1 + num2);
            // resolve(3 +1);
        }else{
            reject('Args should be Numbers');
        }
    });
}

//3+7= 10 +20 = 30
getAddition(3, '7').then((result) => {
    console.log(`Sum is ${result}`);
    return getAddition(result , 20);
}).then((result) => {
    console.log(`Sum should be 30 ${result}`);
}).catch((error) => {
    console.log(`ERROR : ${error}`);
});




//Basic
// var getPromise = new Promise((resolve , reject) => {
//     resolve('Promise accepted');
// });

// getPromise.then((result) => {
//     console.log(`Promise is ${result}`);
    
// });



//4 states of Promise
/*
    1 . resolve
    2 . reject
    3 . pending
    4 . settled
*/



// Axios