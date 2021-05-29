import React from 'react';
import TopNav from './../navigation/TopNav';
import Navigation from './../navigation/BottomNav';
import SensorDetailsData from './SensorDetailsData';
import SensorDetailsGraph from './SensorDetailsGraph';

function SensorDetails(props) {

  return (
    <>
    <div className='content-wrapper'>
        <TopNav />
      <div className='content'>
        <SensorDetailsData/>
        <SensorDetailsGraph/>

      </div>
      <Navigation />
    </div>
  </>
  );
}

export default SensorDetails;
