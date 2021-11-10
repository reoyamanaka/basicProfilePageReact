import './css/WeatherBox.css';
const {Credentials} = require ("./key.js");
var axios = require ("axios");


/* Open weather map settings start */
var options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: 'London,uk',
      lat: '0',
      lon: '0',
      callback: 'test',
      id: '2172797',
      lang: 'null',
      units: 'imperial',
      mode: 'xml'
    },
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': Credentials.weatherKey
    }
};
/* Open weather map settings end */

var weather = null;

axios.request(options).then(function (response) {
    console.log(response.data);
    weather = response.data;
}).catch(function (error) {
    console.error(error);
});

function WeatherBox () {

    return (
        <div className="WeatherBox">

        </div>
    );
}


export default WeatherBox;