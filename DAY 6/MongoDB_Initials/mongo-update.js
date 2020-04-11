const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
MongoClient.connect(url,(error , client) => {
   var db = client.db('MongoDatabaseForInitial'); //

   //findOneandUpdate
   //filter , update ,options , callback

   db.collection('TestApp').findOneAndUpdate({
       name : 'Suresh'
   },{
    //    $set : {
    //        age : 30
    //    }
    $inc : {
        age : -15
    }
   }, {
       returnOriginal : false
   } , (error , result) => {
       console.log(result);
       
   })
   client.close();//
});