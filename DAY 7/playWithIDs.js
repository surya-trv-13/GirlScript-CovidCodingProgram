var {ObjectID} = require('mongodb');

var checkValidation = ObjectID.isValid('6e927d24cd8ae44e886dcc8ensfbj');

console.log(`The Object is : ${checkValidation}`);