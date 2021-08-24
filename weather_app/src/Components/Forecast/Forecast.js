import React, { useState } from 'react';



const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
   function getForecast() {
      // weather data fetch function will go here
      fetch('https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=fdd1ae281173cb89f06bcc253807103b')
        .then(response => response.json())
        .then(response => {
           setResponseObj(response)
       })
      
   }
   return (
    <div>
    <h2>Find Current Weather Conditions</h2>
    <div>
        {JSON.stringify(responseObj)}
    </div>
    <button onClick={getForecast}>Get Forecast</button>
</div>
   )
}
export default Forecast;