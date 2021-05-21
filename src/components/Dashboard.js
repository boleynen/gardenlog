import React, { useState, useEffect } from 'react';
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import { Container } from 'react-bootstrap';
import SensorDataBlock from './dashboard/SensorDataBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faExclamation } from '@fortawesome/free-solid-svg-icons';
import ForecastBlock from './dashboard/ForecastBlock';
import PlantListBlock from './dashboard/PlantListBlock';
import app from "../firebase"

const database = app.database();

// TODO: state opslaan in local storage (state is terug leeg elke x bij page refresh)

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
      id: '',
      name: '',
      image: '',
    }
  ]);

  const [userPlants, setUserPlants] = useState([]);

  const [allPlants, setAllPlants] = useState([])


  Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

  useEffect(() => {
    const userId = app.auth().currentUser.uid
    let ownedPlants = [''];

      database.ref(`user_plants/` + userId).on('value', (data) => {
        const plantsList = data.val();

        for (const [plant, plantDetails] of Object.entries(plantsList)){
          if(plantDetails.owned === true){
            ownedPlants.push(
              plantDetails.plant_id
            )
          }
        }
      });

    var filteredPlantIds = Object.filter(ownedPlants, plant => plant != ""); 
    setUserPlants(filteredPlantIds)

    getAllPlants()

  }, [])


  function getAllPlants(){

    let allPlantsList = [''];

    database.ref(`plants/`).on('value', (data) => {
      const plantsList = data.val();
      
      for (const [plant, plantDetails] of Object.entries(plantsList)){
        allPlantsList.push(
          plantDetails.id
          )
      }
    })
    
    var filteredAllPlantList = Object.filter(allPlantsList, plant => plant != ""); 
    setAllPlants(filteredAllPlantList)

    showPlantList()
  };

  function showPlantList(){
    console.log('user plants:', userPlants)
    console.log('all plants:', allPlants)
  }

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
