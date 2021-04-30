import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SensorCard.scss';

function SensorCard(props) {
  // Declare a new state variables
  const [data, setData] = useState('');
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const [color, setColor] = useState('');
  let colorStyle = { color: props.color };
  return (
    <div className={'sensorCard'}>
      <h1 style={colorStyle} className={'sensorCard__data'}>
        {props.data}
      </h1>
      <p className={'sensorCard__title'}>{props.title}</p>
      <div className={'sensorCard__iconWrapper'}>
        <FontAwesomeIcon
          className={'sensorCard__icon'}
          style={colorStyle}
          icon={props.icon}
        />
      </div>
    </div>
  );
}

export default SensorCard;
