 var {Profile} = require('./Model/profile');
 
 var {ObjectID} = require('mongodb');
 var express = require('express');
 var bodyParser = require('body-parser');
 var hbs = require('hbs');
 var multer = require('multer');

 var app = express();
 app.use(express.static(__dirname+'/public'));
 app.use(bodyParser.json());//
 app.set('view engine' , 'hbs');

 //POST /profile
 app.get('/' , (req,res) => {
    res.render('index' , {
        title : 'Sample APP'
    });
});

 app.post('/profile' , (req , res) => {
    var profile = new Profile({
        name : req.body.name,
        age : req.body.age
    });

    profile.save().then((response) => {
        res.status(200).send({response});
        
    }, (error) => {
        res.status(400).send({error});
        
    })
 });

 // GET /profile
 app.get('/profile' , (req, res) => {
   Profile.find().then((response) => {
       res.status(200).send({response});
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

var upload = multer({
    dest : 'avatars',
    limits : {
        fileSize : 20000000
    },
    fileFilter(req , file , callback) {
        if(!file.originalname.match(/\.(gltf|glb|obj)$/)){
            callback(new Error('Please Upload Image'));
        }
        callback(undefined , true);
        
        // if(!file.originalname.endsWith('.jpg')){}

        // callback(new Error('Please uplaod Image'));
        // callback(undefined , true); 
        // callback(undefined , false);
    }
});

app.post('/upload' ,upload.single('profilePic') , (req,res)=>{
    res.send();
} , (error , req , res , next) => { // This function will handle unCaught errors on Express
    res.status(400).send({error : error.message});
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