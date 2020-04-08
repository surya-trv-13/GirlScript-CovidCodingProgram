var request = require('request');

var geoCode = (address , callback) => {
    //callback(error , result);
    var encodedAddress = encodeURIComponent(address);
    var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodedAddress+'.json?access_token=pk.eyJ1Ijoic3VyeWEtdHJ2LTEzIiwiYSI6ImNrOG9obWZlejE0dWMzZm1paHdoNXQ5NmsifQ.13uh-J0C3eZn8i4ptYTdsQ';

    request({
        url : url,
        json : true
    },(error , resposne , body) => {
        if(error){
            callback('Error occured while getting GeoCode', undefined);
        }else if(resposne.statusCode === 200){
            callback(undefined , {
                address : body.features[0].place_name,
                longitude : body.features[0].center[0],
                latitude : body.features[0].center[1]
            })
        }
    });
};

module.exports = {
    geoCode
}