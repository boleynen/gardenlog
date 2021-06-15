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
  const lightData = props.location.lightData;
  const tempData = props.location.tempData;

  return (
    <>
    <div className='content-wrapper'>
      <TopNav  pageTitle={title}/>
      <div className='content'>
        <SensorDetailsData data={data} title={title} color={color}/>
        <SensorDetailsGraph waterData={waterData} lightData={lightData} tempData={tempData} color={color}/>

      </div>
      <Navigation />
    </div>
  </>
  );
}

export default SensorDetails;
