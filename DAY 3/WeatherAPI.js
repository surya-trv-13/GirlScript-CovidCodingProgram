var request = require('request');

var weatherApi = (latititude , longitude , callback)=> {
    var url = 'https://api.darksky.net/forecast/863a5bf93e4279054106ff84227636f3/'+latititude+','+longitude;

    request({
        url : url ,
        json : true
    }, (error , response , body) => {   
        if(error){
            callback(error, undefined);
        }else if(response.statusCode === 200){
            callback(undefined , {
                temp : body.currently.apparentTemperature
            })
        }
    })
}

module.exports = {
    weatherApi
}