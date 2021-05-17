import React from 'react';
import { useState, useEffect } from 'react';
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import { Container } from 'react-bootstrap';
import SensorDataBlock from './dashboard/SensorDataBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faExclamation } from '@fortawesome/free-solid-svg-icons';
import ForecastBlock from './dashboard/ForecastBlock';
import PlantListBlock from './dashboard/PlantListBlock';
export default function Dashboard() {
  const [sensorData, setSensorData] = useState([
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
  ]);
  const [plantsData, setPlantsData] = useState([
    {
      id: '1',
      name: 'Aardappel',
      image:
        'https://lh5.googleusercontent.com/-rHwzEtgZf-g/Ugyx-M0w1MI/AAAAAAAACKs/3E862vV2t1g/s640/aardappel1.0-tahirmq-CCBYSA3.0.jpg',
    },
    {
      id: '2',
      name: 'Citroen',
      image:
        'https://www.fruitsnacks.be/media/cache/strip/uploads/media/5be03db7e8240/lemon-1117568-1280.jpg',
    },
    {
      id: '3',
      name: 'Braambes',
      image:
        'https://d2k6dqn3q0mgs.cloudfront.net/eyJrZXkiOiJwbGFudHNcLzUzODcuanBnIiwiZWRpdHMiOnsicm90YXRlIjpudWxsLCJyZXNpemUiOnsid2lkdGgiOjEyMDAsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19LCJidWNrZXQiOiJtaWpudHVpbiJ9',
    },
  ]);

  return (
    <>
      <div className='content-wrapper'>
        <div className='content'>
          <TopNav />
          <ForecastBlock />
          <SensorDataBlock sensorData={sensorData} />
          <PlantListBlock plantsData={plantsData} />
        </div>
        <Navigation />
      </div>
    </>
  );
}
