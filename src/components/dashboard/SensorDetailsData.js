import React, { useState } from 'react';
import './SensorDetailsData.scss'

function SensorDetailsData(props) {
    
  
    return (
      <div className={"sensorDetailsData"}>
          <div className={"sensorDetailsData__status"}>
            <div>
                <h1>23%</h1>
                <p>Temperatuur</p>
            </div>
            <p>Genoeg water</p>
          </div>
          <div className={"sensorDetailsData__desc"}>
            <p>Ideaal: tussen 20% en 50%</p>
            <p>Je planten hebben genoeg water maar zijn toch iets aan de droge kant. Geef ze dus snel genoeg terug water.</p>
          </div>
      </div>
    );
  }
  
  export default SensorDetailsData;