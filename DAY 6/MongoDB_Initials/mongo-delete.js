const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
MongoClient.connect(url,(error , client) => {
   var db = client.db('MongoDatabaseForInitial'); //

   //deleteOne
    // db.collection('TestApp').deleteOne({gender : 'Male'}).then((result) => {
    //     console.log('Deleted :',result);
        
    // }, (error) => {
    //     console.log(error);
        
    // });
   //deleteMany
//    db.collection('TestApp').deleteMany({age : 24}).then((result) => {
//         console.log('Deleted :',result);
    
//     }, (error) => {
//         console.log(error);
    
//     });
   //findOneandelete
   db.collection('TestApp').findOneAndDelete({age : 23}).then((result) => {
    console.log('Deleted :',result);
    
}, (error) => {
    console.log(error);
    
});

   client.close();//
});