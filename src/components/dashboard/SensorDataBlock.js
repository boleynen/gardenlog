import React, { useState } from 'react';
import SensorCardList from './SensorCardList';
import ButtonMedium from '../navigation/ButtonMedium';
import './SensorDataBlock.scss';
function SensorDataBlock(props) {
  // Declare a new state variables
  const sensorData = props.sensorData;
  return (
    <div className={'sensorDataBlock'}>
      <SensorCardList   key={props.sensorData} 
                        sensorData={props.sensorData} 
                        waterData={props.waterData}/>
        {sensorData.map((sensor, index) => {
          return (
            <h3 key={index} className={'sensorDataBlock__message'}>
              {sensor.status}
            </h3>
          );
        })}
      <ButtonMedium buttonText={'Notitie toevoegen'} buttonLink={''} />
    </div>
  );
}

export default SensorDataBlock;
