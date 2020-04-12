 var {Profile} = require('./Model/profile');
 
 var {ObjectID} = require('mongodb');
 var express = require('express');
 var bodyParser = require('body-parser');

 var app = express();
 app.use(bodyParser.json());//

 //POST /profile
 app.post('/profile' , (req , res) => {
    var profile = new Profile({
        name : req.body.name,
        age : req.body.age
    });

    profile.save().then((result) => {
        res.status(200).send({result});
        
    }, (error) => {
        res.status(400).send({error});
        
    })
 });

 // GET /profile
 app.get('/profile' , (req, res) => {
   Profile.find().then((result) => {
       res.status(200).send({result});
   }, (error) => {
        res.status(404).send({error});
   });
 });


 //GET /profile/:id
app.get('/profile/:id' , (req, res) => {
    //req.params ??
    // console.log(req.params);
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(400).send({error :'ID is not valid'});
    }

    Profile.findById(id).then((result) => {
        if(result === null){
            return res.status(404).send({error :'ID is not valid'});
        }
        res.send({result});
    },(error) => {
        res.status(400).send({error});
    });
});

//DELETE /profile/:id
app.delete('/profile/:id' , (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(400).send({error :'ID is not valid'});
    }

    Profile.findByIdAndDelete(id).then((result) => {
        if(result === null){
            return res.status(404).send({error :'ID is not valid'});
        }
        res.send({result});
    },(error) => {
        res.status(400).send({error});
    });
});



 app.listen(3100 , () => {
    console.log('Server is running on port 3100');
    
 });




//find 
//findOne 
//findById















// var user1 = new Profile({
//     name : 'Surya'
// });

// user1.save().then((result) => {
//     console.log(result);
    
// } , (error) => {
//     console.log(error);
    
// });