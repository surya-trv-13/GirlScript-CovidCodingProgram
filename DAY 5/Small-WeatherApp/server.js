var express = require('express');
var hbs = require('hbs');

var geoLocation = require('./geoLocation');
var WeatherAPI = require('./WeatherAPI');


var app = express();
app.use(express.static(__dirname+'/public'));
app.set('view engine' , 'hbs');

app.get('/', (req , res) => {
    res.render('index' , {
        title : 'Weather Temparature'
    });
});

app.get('/weather' , (req ,res) => {
    if(!req.query.address){
        res.send({error : 'Give an address to get Forecast'});
    }else{
        geoLocation.geoCode(req.query.address , (error , result) => {
            if(error){
                return res.send({error});
                
            }else{
                //console.log(result);
                //Callback Chaining
                WeatherAPI.weatherApi(result.latitude , result.longitude , (err , resl) =>{
                    if(err){
                        return res.send({error : err});
                    }else{
                        res.send({
                            temp : `Temperature in ${result.address} is ${resl.temp} degree celcius`
                        });
                        // console.log(`Temperature in ${result.address} is ${resl.temp} degree celcius`);
                        
                    }
                });
            }
        });
        
    }
})



app.listen(3100 , () => {
    console.log('Server runs on 3100');
    
});