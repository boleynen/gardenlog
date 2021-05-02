import React from 'react';
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import { Container } from 'react-bootstrap';
import SensorCardList from './dashboard/SensorCardList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faExclamation } from '@fortawesome/free-solid-svg-icons';
export default function Dashboard() {
  const sensorData = [
    {
      data: '23°',
      title: 'Temperatuur',
      icon: faHeart,
      color: '#F88484',
    },
    {
      data: '15%',
      title: 'Vochtigheid',
      icon: faExclamation,
      color: '#9ED3FC',
    },
    {
      data: '89%',
      title: 'Licht',
      icon: faHeart,
      color: '#FFDB5E',
    },
  ];

  return (
    <>
      <div className='content-wrapper'>
        <div className='content'>
          <TopNav />
          <SensorCardList sensorData={sensorData} />
        </div>
        <Navigation />
      </div>
    </>
  );
}
