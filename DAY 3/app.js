var yargs = require('yargs');

var geoLocation = require('./geoLocation');
var WeatherAPI = require('./WeatherAPI');
var argv = yargs
    .option({
        a :{
            describe : 'Give Address',
            demand : true,
            string : true
        }
    })
    .help()
    .argv;

    console.log('Yargs' ,argv);
    

geoLocation.geoCode(argv.a , (error , result) => {
    if(error){
        console.log(error);
        
    }else{
        //console.log(result);
        //Callback Chaining
        WeatherAPI.weatherApi(result.latitude , result.longitude , (err , res) =>{
            if(err){
                console.log(err);
            }else{
                console.log(`Temperature in ${result.address} is ${res.temp} degree celcius`);
                
            }
        });
    }
});
