import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fetchWeather from './../api/fetchWeather'
import translateWeather from '../../functions/translateWeather'
import findImg from '../../functions/findImg'
import './ForecastBlock.scss';

function ForecastBlock(props) {

  const [apiData, setApiData] = useState('');
  const [query, setQuery] = useState('');

  const date = new Date();
  let weekday = date.toLocaleString('nl-NL', { weekday: 'long' });
  weekday = weekday[0].toUpperCase() + weekday.substring(1);
  let day = date.toLocaleString('nl-NL', { day: 'numeric' });
  let month = date.toLocaleString('nl-NL', { month: 'long' });
  const today = weekday + ' ' + day + ' ' + month;
  const [currentDate, setCurrentDate] = useState('Maandag');

  useEffect(() => {
    async function fetchMyApi(){
      const data = await fetchWeather(query)
      console.log(data)
      setApiData(data)
    }
    fetchMyApi()
  }, [])

  return (
    <div className={'forecastBlock'}>
      {apiData ? (
      <>
        <h1 className={'forecastBlock__currentDate'}>{today}</h1>

        <div className={'forecastBlock__image'}>
          {/* <circle cx={40} cy={31} r={30} fill='#FFDB5E' /> */}
          <img src={findImg(apiData.current.weather[0].id)} alt="#"/>
        </div>
  
        <div className={'forecastBlock__forecastWrapper'}>
          <h1 className={'forecastBlock__temp'}>{apiData.current.temp.toFixed(1)}&deg;C - {translateWeather(apiData.current.weather[0].main)}</h1>
          <p className={'forecastBlock__desc'}>
            {apiData.daily[0].weather[0].description} met maxima {apiData.daily[0].temp.max.toFixed(1)}&deg;C en minima {apiData.daily[0].temp.min.toFixed(1)}&deg;C.
          </p>
        </div>     
      </>
      ) : (
        <p>Geen weerbericht gevonden!</p>
      )}
    </div>
  );
}

export default ForecastBlock;
