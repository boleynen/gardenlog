import React, { useState, useEffect } from "react"
import Navigation from '../navigation/BottomNav'
import TopNav from '../navigation/TopNav';
import fetchWeather from '../api/fetchWeather'
import './Weather.scss';
import cloudsImg from '../../assets/weatherStatus/clouds.png'
import mistImg from '../../assets/weatherStatus/mist.png'
import rainImg from '../../assets/weatherStatus/rain.png'
import snowImg from '../../assets/weatherStatus/snow.png'
import stormImg from '../../assets/weatherStatus/storm.png'
import sunImg from '../../assets/weatherStatus/sun.png'
import cloudsImgSm from '../../assets/weatherStatus/small/sm-clouds.png'
import mistImgSm from '../../assets/weatherStatus/small/sm-mist.png'
import rainImgSm from '../../assets/weatherStatus/small/sm-rain.png'
import snowImgSm from '../../assets/weatherStatus/small/sm-snow.png'
import stormImgSm from '../../assets/weatherStatus/small/sm-storm.png'
import sunImgSm from '../../assets/weatherStatus/small/sm-sun.png'
import { render } from "@testing-library/react";
import Geocode from "react-geocode";
const axios = require('axios');


function Weather() {
    const [apiData, setApiData] = useState(null);
    const [userLocation, setUserLocation] = useState(null);

    let lat = 51.24;
    let lon = 5.11; 

    const apiKey = 'e0ec51e490d0691a2a24c61b2da3cf65';
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=nl&appid=${apiKey}`;

    useEffect(() => {
        async function fetchMyApi(){
            const res = await fetch(apiUrl)
            if(!res.ok){
                const alert = `An error occured: ${res.status}`
                throw new Error(alert)
            }
            const apiData = await res.json()
            // setApiData(weather)
            console.log(apiData)
            setApiData(apiData)
        }
        fetchMyApi()
    }, [apiUrl]);

    // functie voor unix timecodes naar date & time te zetten
    const unixToDay = (u) =>{
        var timestamp = u; // UNIX timestamp in seconds
        var xx = new Date();
        xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
        return(xx.toLocaleDateString('nl', { weekday: 'long' })); // the Day
    }
    const unixToTime = (u) =>{
        var timestamp = u; // UNIX timestamp in seconds
        var xx = new Date();
        xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
        return(xx.toLocaleTimeString('nl-NL')); // the Day
    }

    const thunderstorm = [200,201,202,210,211,212,221,230,231,232];
    const rain = [300,301,302,310,311,312,313,314,321,500,501,502,503,504,511,520,521,522,531];
    const snow = [600,601,602,611,612,613,615,616,620,621,622];
    const atmosphere = [701,711,721,731,741,751,761,762,771,781];
    const clear = 800;
    const clouds = [801,802,803,804];

    // functie dat juiste achtergrond img toont: 
    // weather API krijgt code binnen die vetreld wat voor weer het is, en toon ahv die code juiste image (zie codes bovenaan)
    let findImg = (id) => {
        if(thunderstorm.includes(id)){
            return stormImg;
        }else if(rain.includes(id)){
            return rainImg;
        }else if(snow.includes(id)){
            return snowImg;
        }else if(atmosphere.includes(id)){
            return mistImg;
        }else if(clear === id){
            return sunImg;
        }else if(clouds.includes(id)){
            return cloudsImg;
        }else{
            console.log('weather api didnt return anything')
        }
    }

    let findSmallImg = (id) => {
        if(thunderstorm.includes(id)){
            return stormImgSm;
        }else if(rain.includes(id)){
            return rainImgSm;
        }else if(snow.includes(id)){
            return snowImgSm;
        }else if(atmosphere.includes(id)){
            return mistImgSm;
        }else if(clear === id){
            return sunImgSm;
        }else if(clouds.includes(id)){
            return cloudsImgSm;
        }else{
            console.log('weather api didnt return anything')
        }
    }

    // functie voor data vanuit weather api van engels naar NL te vertalen
    let translateTitle = (weatherEnglish) => {
        if(weatherEnglish === 'Thunderstorm'){
            return 'Onweer'
        }
        if(weatherEnglish === 'Drizzle'){
            return 'Motregen'
        }
        if(weatherEnglish === 'Rain'){
            return 'Regen'
        }
        if(weatherEnglish === 'Snow'){
            return 'Sneeuw'
        }
        if(weatherEnglish === 'Mist' 
        || weatherEnglish === 'Smoke'
        || weatherEnglish === 'Haze'
        || weatherEnglish === 'Dust'
        || weatherEnglish === 'Fog'
        || weatherEnglish === 'Sand'
        || weatherEnglish === 'Ash'
        || weatherEnglish === 'Tornado'
        || weatherEnglish === 'Squall'
        ){
            return 'Mist'
        }
        if(weatherEnglish === 'Clear'){
            return 'Zonnig'
        }
        if(weatherEnglish === 'Clouds'){
            return 'Bewolkt'
        }
    }

    Geocode.setApiKey("AIzaSyCulUiAQPwTtcagVE-fTb8OUXEHuNhGpFA");
    Geocode.setLanguage("nl");
    Geocode.setRegion("nl");

    // lat & lon naar plaats
    Geocode.fromLatLng(lat, lon).then(
        (response) => {
          let city, country;
          for (let i = 0; i < response.results[0].address_components.length; i++) {
            for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
              switch (response.results[0].address_components[i].types[j]) {
                case "locality":
                  city = response.results[0].address_components[i].long_name;
                  break;
                case "country":
                  country = response.results[0].address_components[i].long_name;
                  break;
              }
            }
          }
          setUserLocation(city + ', ' + country)
        },
        (error) => {
          console.error(error);
        }
      );

    // if (!apiData){
    //     return <h1>Failed to get weather data</h1>
    // }
    
    return (
        <>
        {apiData ? (
        <div className="content">
            <TopNav />
            {console.log('1', apiData)}
            <div className="wrapper">
                <div className="weatherToday">
                    <div className="weatherToday__title">
                        <h1>{translateTitle(apiData.current.weather[0].main)}</h1>
                        {/* <h2>{userLocation}</h2> */}
                        <h2>Dessel-belgie</h2>
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
                    <div className="weatherDetails__detail col-6 col-lg-2">
                        <p>Zon op</p>
                        <p className="bolder">{unixToTime(apiData.current.sunrise)}</p>
                    </div>
                    <div className="weatherDetails__detail col-6 col-lg-2">
                        <p>Zon onder</p>
                        <p className="bolder">{unixToTime(apiData.current.sunset)}</p>
                    </div>
                    <div className="weatherDetails__detail col-6 col-lg-2">
                        <p>Neerslag</p>
                        <p className="bolder">{apiData.daily[0].pop} mm</p>
                    </div>
                    <div className="weatherDetails__detail col-6 col-lg-2">
                        <p>Vochtigheid</p>
                        <p className="bolder">{apiData.current.humidity} %</p>
                    </div>
                    <div className="weatherDetails__detail col-6 col-lg-2">
                        <p>Voelt aan als</p>
                        <p className="bolder">{apiData.current.feels_like.toFixed(1)}&deg;</p>
                    </div>
                    <div className="weatherDetails__detail col-6 col-lg-2">
                        <p>Wind</p>
                        <p className="bolder">{apiData.current.wind_speed} m/s</p>
                    </div>
                </div>
            </div>
        </div>
        ) : (
            <p>loading</p>
        )}
    <Navigation/>
    </>
);
}

export default Weather
