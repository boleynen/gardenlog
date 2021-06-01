import React, { useState } from 'react';
import LineChart from './LineChart'
import './SensorDetailsGraph.scss'

function SensorDetailsGraph(props) {
    let waterData = props.waterData;
    let color = props.color;
  
    console.log(waterData)
    return (
      <>
      <div className={"sensorDetailsGraph"}>
         <LineChart waterData={waterData} color={color}/>
      </div>
      </>
    );
  }
  
  export default SensorDetailsGraph;