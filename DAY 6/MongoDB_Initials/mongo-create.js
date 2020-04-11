const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
MongoClient.connect(url,(error , client) => {
   var db = client.db('MongoDatabaseForInitial'); //

   //insert
    // db.collection('TestApp').insert({
    //     name : 'Suresh',
    //     age : 23
    // }, (err , result) => {
    //     console.log(JSON.stringify(result , undefined , 2));
        
    // });

   //insertOne
//    db.collection('TestApp').insertOne({
//         name : 'Samresh',
//         age : 24
//     }, (err , result) => {
//         console.log(JSON.stringify(result.ops , undefined , 2));
//     });

   //insertMany
   db.collection('TestApp').insertMany([{
        name : 'Samresh',
        age : 24
    },{
        name : 'Nilesh',
        gender : 'Male'
    }], (err , result) => {
        console.log(JSON.stringify(result.ops , undefined , 2));
    });

   client.close();//
});