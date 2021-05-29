import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SensorCard.scss';
import { Link } from "react-router-dom"


function SensorCard(props) {
  // Declare a new state variables
  const [data, setData] = useState('');
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const [color, setColor] = useState('');
  let colorStyle = { color: props.color };
  return (
    <Link to="/sensor-details" className={`sensorCard  ${props.class}`}>
      <h1 style={colorStyle} className={'sensorCard__data'}>
        {props.data}
      </h1>
      <p className={'sensorCard__title'}>{props.title}</p>
      <div className={`sensorCard__iconWrapper ${props.class}`}>
        <FontAwesomeIcon
          className={'sensorCard__icon'}
          style={colorStyle}
          icon={props.icon}
          />
      </div>
    </Link>
  );
}

export default SensorCard;
