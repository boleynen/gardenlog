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

  try{
    if(props.title === 'Vochtigheid'){
      return(
      <Link className={`sensorCard  ${props.class}`}
            to={{pathname:"/sensor-details",  data: props.data, 
                                            title: props.title,
                                            color: props.color,
                                            waterData: props.waterData }}>
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
      )
    }else if(props.title === 'Temperatuur'){
      return(
      <Link className={`sensorCard  ${props.class}`}
            to={{pathname:"/sensor-details",  data: props.data, 
                                            title: props.title,
                                            color: props.color,
                                            tempData: props.tempData }}>
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
      )
    }else if(props.title === 'Licht'){
      return(
      <Link className={`sensorCard  ${props.class}`}
            to={{pathname:"/sensor-details",  data: props.data, 
                                            title: props.title,
                                            color: props.color,
                                            lightData: props.lightData }}>
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
      )
    }
  } catch(error){
    console.log(error)
  }



}

export default SensorCard;
