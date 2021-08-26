import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    const uriEncodedCity = encodeURIComponent(city);
    

    //preventDefault is a method called on a javascript event object to prevent default behavior. I.E. default behvior of 
    //form submit is to refresh, but we use this when we do not want to refresh the page. 
   
    function getForecast(e) {
        e.preventDefault();
    

      // weather data fetch function will go here
    
      fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${uriEncodedCity}&cnt=5&appid=a24f6a95c88938366c0ee6c8e297d505
      `)
        .then(response => response.json())
        .then(response => {
           setResponseObj(response)
       })
    }           
     
       

        
   return (
    <div>
    <h2>Find Current Weather Conditions</h2>
    <div>
        <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={classes.textInput}/>
                <button className={classes.Button}type="submit">Get Forecast</button>
            </form>
        <Conditions
               responseObj={responseObj}
               />
    </div> 
</div>
   )
}
export default Forecast;