var yargs = require('yargs');
var axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.a);
var geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodedAddress+'.json?access_token=pk.eyJ1Ijoic3VyeWEtdHJ2LTEzIiwiYSI6ImNrOG9obWZlejE0dWMzZm1paHdoNXQ5NmsifQ.13uh-J0C3eZn8i4ptYTdsQ';

axios.get(geocodingURL).then((response) => {
    if(response.status !== 200){
        throw new Error('Error Occured');
    }

    var address = response.data.features[0].place_name;
    var longitude = response.data.features[0].center[0];
    var latitude = response.data.features[0].center[1];

    console.log(`ADDRESS : ${address}`);
    var weatherURL = 'https://api.darksky.net/forecast/863a5bf93e4279054106ff84227636f3/'+latitude+','+longitude;
    return axios.get(weatherURL);
}).then((response) => {
    if(response.status !== 200){
        throw new Error('Error Occured');
        // console.log('Error Occured'); 
    }
    var temp = response.data.currently.apparentTemperature;
    console.log(`TEMPERATURE : ${temp}`);
}).catch((e) => {
    console.log('ERROR :',e);
    
})
