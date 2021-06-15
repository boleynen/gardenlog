import React, { useState } from 'react';
import SensorCard from './SensorCard';
import './SensorCardList.scss';

function SensorCardList(props) {
  // Declare a new state variables
  const sensorData = props.sensorData;
  const waterData = props.waterData;
  const tempData = props.tempData;
  const lightData = props.lightData;

  return (
    <div className={'sensorCardList'}>
      {sensorData.map((sensor, index) => {
        return (
          <SensorCard
            key={index}
            id={index}
            data={sensor.data}
            title={sensor.title}
            icon={sensor.icon}
            color={sensor.color}
            class={sensor.class}
            waterData={waterData}
            tempData={tempData}
            lightData={lightData}
          />
        );
      })}
    </div>
  );
}

export default SensorCardList;
