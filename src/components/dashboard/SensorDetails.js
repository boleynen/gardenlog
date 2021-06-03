import React from 'react';
import TopNav from './../navigation/TopNav';
import Navigation from './../navigation/BottomNav';
import SensorDetailsData from './SensorDetailsData';
import SensorDetailsGraph from './SensorDetailsGraph';

function SensorDetails(props) {
  const data = props.location.data;
  const title = props.location.title;
  const color = props.location.color;
  const waterData = props.location.waterData;

  return (
    <>
    <div className='content-wrapper'>
      <TopNav  pageTitle={title}/>
      <div className='content'>
        <SensorDetailsData data={data} title={title} color={color}/>
        <SensorDetailsGraph waterData={waterData} color={color}/>

      </div>
      <Navigation />
    </div>
  </>
  );
}

export default SensorDetails;
