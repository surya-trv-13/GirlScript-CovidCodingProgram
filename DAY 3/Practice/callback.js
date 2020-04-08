var user = (id , callback) => {
    userObject = {
        id : id ,
        name : 'Surya'
    }

    callback(userObject);
};

user(21 , (userObject) => {
    console.log(userObject);
});