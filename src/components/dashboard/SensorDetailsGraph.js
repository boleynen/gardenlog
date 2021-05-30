import React, { useState } from 'react';
import LineChart from './LineChart'
import './SensorDetailsGraph.scss'

function SensorDetailsGraph(props) {
    
  
    return (
      <>
      <div className={"sensorDetailsGraph"}>
         <LineChart />
      </div>
      </>
    );
  }
  
  export default SensorDetailsGraph;