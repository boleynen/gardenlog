import React, { useState } from 'react';
import SensorCardList from './SensorCardList';
import ButtonMedium from '../navigation/ButtonMedium';
import './SensorDataBlock.scss';
function SensorDataBlock(props) {
  // Declare a new state variables
  return (
    <div className={'sensorDataBlock'}>
      <SensorCardList sensorData={props.sensorData} />
      <h3 className={'sensorDataBlock__message'}>
        Je planten hebben dorst, geef ze water!
      </h3>
      <ButtonMedium />
    </div>
  );
}

export default SensorDataBlock;
