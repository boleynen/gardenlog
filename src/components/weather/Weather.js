import React, { useState, useEffect } from "react"
import Navigation from '../navigation/BottomNav'
import TopNav from '../navigation/TopNav';
import fetchWeather from '../api/fetchWeather'
import translateWeather from '../../functions/translateWeather'
import findImg from '../../functions/findImg'
import findSmallImg from '../../functions/findSmallImg'
import './Weather.scss';
import Loader from './../Loader'
import unixToDay from "../../functions/unixToDay";
import unixToTime from "../../functions/unixToTime";
import GeocodeFromLatLng from "../../functions/GeocodeFromLatLon.js";
import GeocodeFromAdress from "../../functions/GeocodeFromAdress.js";
import app from "./../../firebase"
const axios = require('axios');


function Weather() {
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [apiData, setApiData] = useState(null);
    const [userLatLon, setUserLatLon] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const userId = app.auth().currentUser.uid
    const database = app.database();

    useEffect(() => {
        setLoading(true)

        async function fetchMyApi(){
            const data = await fetchWeather(query)
            console.log(data)
            setApiData(data)
        }
        fetchMyApi()
        
        database.ref(`users/` + userId).on('value', (data) =>{
            const user = data.val();
            const location = user.location
            console.log(location)
            setUserLatLon(GeocodeFromAdress(location))
            setUserLocation(location)
        })


        console.log(apiData)
          setTimeout(() => {
            setLoading(false)
          }, 1000);

    }, []);

    return (
    <>
    <div className="content-wrapper">
        <TopNav pageTitle={"Het weer"}/>
            <div className="content weather">
            { apiData  && loading === false ? (
                <>
                <div className="weatherToday">
                    <div className="weatherToday__title">
                        <h1>{translateWeather(apiData.current.weather[0].main)}</h1>
                        <h2>{userLocation}</h2>
                    </div>
                    <div className="weatherToday__temp">
                        <p>{apiData.current.temp.toFixed(1)}&deg;</p>
                    </div>
                    <div className="weatherToday__desc">
                        <p>
                            Vandaag: {apiData.daily[0].weather[0].description} met maxima {apiData.daily[0].temp.max.toFixed(1)}&deg;C en minima {apiData.daily[0].temp.min.toFixed(1)}&deg;C.
                        </p>
                    </div>
                    <div className="weatherToday__img">
                        <img src={findImg(apiData.current.weather[0].id)} alt="weather status icon"/>
                    </div>
                </div>
                <div className="weatherWeek">
                    <ul className="weatherWeek__days">
                    {apiData.daily.map((day) => {     
                        return(
                        <li key={day.dt}>
                            <p>{unixToDay(day.dt)}</p>
                            <img src={findSmallImg(day.weather[0].id)} alt="#"/>
                            <div>
                                <p>{day.temp.max.toFixed(0)}</p>
                                <p>{day.temp.min.toFixed(0)}</p>
                            </div>
                        </li>
                        ) 
                    })}
                    </ul>
                </div>
                <div className="weatherDetails row">
                    <div className="weatherDetails__detail col-6 col-lg-4">
                        <p>Zon op</p>
                        <p className="bolder">{unixToTime(apiData.current.sunrise)}</p>
                    </div>
                    <div className="weatherDetails__detail col-6 col-lg-4">
                        <p>Zon onder</p>
                        <p className="bolder">{unixToTime(apiData.current.sunset)}</p>
                    </div>
                    <div className="weatherDetails__detail col-6 col-lg-4">
                        <p>Neerslag</p>
                        <p className="bolder">{apiData.daily[0].pop} mm</p>
                    </div>
                    <div className="weatherDetails__detail col-6 col-lg-4">
                        <p>Vochtigheid</p>
                        <p className="bolder">{apiData.current.humidity} %</p>
                    </div>
                    <div className="weatherDetails__detail col-6 col-lg-4">
                        <p>Voelt aan als</p>
                        <p className="bolder">{apiData.current.feels_like.toFixed(1)}&deg;</p>
                    </div>
                    <div className="weatherDetails__detail col-6 col-lg-4">
                        <p>Wind</p>
                        <p className="bolder">{apiData.current.wind_speed} m/s</p>
                    </div>
                </div>
                </>
            ) : (
                <Loader/>
            )}
            </div>
            
        <Navigation/>
    </div>
    </>
);
}

export default Weather
