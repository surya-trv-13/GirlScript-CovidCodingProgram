const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
MongoClient.connect(url,(error , client) => {
   var db = client.db('MongoDatabaseForInitial'); //

   //find
//    db.collection('TestApp').find().toArray().then((result) => {
//     console.log('DATA in TestApp :',result );
    
//    },(error) => {
//        console.log(error);
       
//    });

//Fetching a particular property
// db.collection('TestApp').find({age : 24}).toArray().then((result) => {
//     console.log('DATA in TestApp :',result );
    
//    },(error) => {
//        console.log(error);
       
//    });

    //Count
    db.collection('TestApp').find({age : 24}).count().then((result) => {
        console.log('DATA in TestApp :',result );
        
       },(error) => {
           console.log(error);
           
       });
    

   client.close();//
});