// const side = 31;

// exports.area=function(side){
//     return (side * side);
// }
//OR
//exports.area = (side) => {
//     return (side * side);
// }
//OR
//Example of Arrow function
area = (side) => side*side;

//Main Module
var isCalledDirectly = require.main === module;
console.log(isCalledDirectly);


module.exports= {
    areaFunction : area,
    isCalledDirectly
};

