import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ForecastBlock.scss';

function ForecastBlock(props) {
  // Declare a new state variables
  const date = new Date();
  let weekday = date.toLocaleString('nl-NL', { weekday: 'long' });
  weekday = weekday[0].toUpperCase() + weekday.substring(1);
  let day = date.toLocaleString('nl-NL', { day: 'numeric' });
  let month = date.toLocaleString('nl-NL', { month: 'long' });
  const today = weekday + ' ' + day + ' ' + month;
  const [currentDate, setCurrentDate] = useState('Maandag');

  return (
    <div className={'forecastBlock'}>
      <h1 className={'forecastBlock__currentDate'}>{today}</h1>

      <svg className={'forecastBlock__image'}>
        <circle cx={40} cy={31} r={30} fill='#FFDB5E' />
      </svg>

      <div className={'forecastBlock__forecastWrapper'}>
        <h1 className={'forecastBlock__temp'}>24-24</h1>
        <p className={'forecastBlock__desc'}>
          Vandaag schijnt de zon de hele dag. Het wordt maxima 16°C. Helder
          vanavond met minima van 4°C.
        </p>
      </div>
    </div>
  );
}

export default ForecastBlock;
