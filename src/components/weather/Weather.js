import React, { useState, useEffect } from "react"
import Navigation from '../navigation/BottomNav'
import TopNav from '../navigation/TopNav';
import { Container } from "react-bootstrap"
import './Weather.scss';
const axios = require('axios');


function Weather() {
    const [apiData, setApiData] = useState({});

    let city = 'Dessel'
    let lat = 51.24;
    let lon = 5.11; 

    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=nl&appid=e0ec51e490d0691a2a24c61b2da3cf65`;

    useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => setApiData(data));
      }, [apiUrl]);
      
    const kelvinToCelcius = (k) => {
    return (k - 273.15).toFixed(0);
    };

    const unixToDay = (u) =>{
        var timestamp = u; // UNIX timestamp in seconds
        var xx = new Date();
        xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
        return(xx.toLocaleDateString('nl', { weekday: 'long' })); // the Day
    }

    const thunderstorm = [200,201,202,210,211,212,221,230,231,232];
    const drizzle = [300,301,302,310,311,312,313,314,321];
    const rain = [500,501,502,503,504,511,520,521,522,531];
    const snow = [600,601,602,611,612,613,615,616,620,621,622];
    const atmosphere = [701,711,721,731,741,751,761,762,771,781];
    const clear = 800;
    const clouds = [801,802,803,804];

    let checkWeather = (id) => {
        if(thunderstorm.includes(id)){
            return '../../assets/weatherStatus/storm.png';
        }else if(drizzle.includes(id)){
            return '../../assets/weatherStatus/rain.png';
        }else if(rain.includes(id)){
            return '../../assets/weatherStatus/rain.png';
        }else if(snow.includes(id)){
            return '../../assets/weatherStatus/snow.png';
        }else if(atmosphere.includes(id)){
            return '../../assets/weatherStatus/mist.png';
        }else if(clear === id){
            return '../../assets/weatherStatus/sun.png';
        }else if(clouds.includes(id)){
            return '../../assets/weatherStatus/clouds.png';
        }else{
            console.log('weather api didnt return anything')
        }

    }

    return (
    <>
    {console.log(apiData)}
    <div className="content">
        <TopNav />
        <div className="wrapper">
            <div className="weatherToday">
                <div className="weatherToday__title">
                    <h1>{apiData.daily[0].weather[0].main}</h1>
                    <h2>lat({apiData.lat}) lon({apiData.lon})</h2>
                </div>
                <div className="weatherToday__temp">
                    <p>{kelvinToCelcius(apiData.current.temp)}&deg;</p>
                </div>
                <div className="weatherToday__desc">
                    <p>
                        Vandaag: {apiData.daily[0].weather[0].description} met maxima {kelvinToCelcius(apiData.daily[0].temp.max)}&deg;C en minima {kelvinToCelcius(apiData.daily[0].temp.min)}&deg;C.
                    </p>
                </div>
                <img src={checkWeather(apiData.daily[0].weather[0].id)} alt="weather status icon"/>
            </div>
            <div className="weatherWeek">
                <ul className="weatherWeek__days">
                {apiData.daily.map((day) => {     
                    return(
                    <li>
                        <p>{unixToDay(day.dt)}</p>
                        <img src="#" alt="#"/>
                        <div>
                            <p>17</p>
                            <p>12</p>
                        </div>
                    </li>
                    ) 
                })}
                </ul>
            </div>
            <div className="weatherDetails"></div>
        </div>
    </div>
    <Navigation/>
    </>
);
}

export default Weather
