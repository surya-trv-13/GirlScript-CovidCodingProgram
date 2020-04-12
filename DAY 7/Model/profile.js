var {mongoose} = require('./../DBManager/db');


var Profile = mongoose.model('User-profile', {
    name : {
      required : true,
      minlength : 5,
      type : String  
    },
    age : {
        // required : true,
        type : Number,
        default : 18 
    }
});

module.exports = {
    Profile
};