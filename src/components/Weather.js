import React, { useState, useEffect } from "react"
import Navigation from './Navigation'
import { Container } from "react-bootstrap"

function Weather() {
    const [apiData, setApiData] = useState({});

    let city = 'Dessel'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0ec51e490d0691a2a24c61b2da3cf65`;

    useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => setApiData(data));
      }, [apiUrl]);
      
      const kelvinToCelcius = (k) => {
        return (k - 273.15).toFixed(2);
      };

    return (
    <>
    <header>
        
    </header>
    <div className="">
        <div className="container">

        {console.log(apiData)}

            {apiData.main ? (
            <div>
                <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
                />

                <p className="h2">
                {kelvinToCelcius(apiData.main.temp)}&deg; C
                </p>
                
                <strong>{apiData.name}</strong>


            </div>
            ) : (
            <h1>Oeps! We konden geen data vinden.. Probeer later opnieuw.</h1>
            )}
        </div>
    </div>
    </>
);
}

export default Weather
