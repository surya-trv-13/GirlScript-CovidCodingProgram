var obj = {
    name : 'AnyBody',
    age : 22
}

//Object to string
var stringObj = JSON.stringify(obj);
console.log(stringObj);

//string to object
var object1 = JSON.parse(stringObj);
console.log('Object : ' , object1);
