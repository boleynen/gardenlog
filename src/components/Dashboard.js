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
  const [plantsData, setPlantsData] = useState([]);

  const database = app.database();
  const userId = app.auth().currentUser.uid
  let databaseRef = database.ref(`user_plants/` + userId)
  let databasePlantsRef = database.ref(`plants/`)

  // functie voor lege values in objecten eruit te filteren
  Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

  useEffect(() => {
    const responseIds = []
    databaseRef.on('value', (data) =>{
      const userPlantIds = data.val();
      // console.log(userPlantIds)
      
      for (const [plant, plantDetails] of Object.entries(userPlantIds)){
        if(plantDetails.owned === true){
          responseIds.push(
            plantDetails.plant_id
            )
          }
        }
        // console.log('responseIds', responseIds)
    })

    const responseFilteredPlants = []
    databasePlantsRef.on('value', (data) =>{
      const plantsById = data.val();

      for (const [plant, plantDetails] of Object.entries(plantsById)){

        responseIds.forEach(function(id){
          if(id === plantDetails.id){
            responseFilteredPlants.push(
              plantDetails
            )
          }
        })
      }
        // console.log('responseFilteredPlants', responseFilteredPlants)
    })

    setPlantsData(responseFilteredPlants)
    console.log(plantsData)

  }, [])

  return (
    <>
      <div className='content-wrapper'>
        <div className='content'>
        {plantsData != "" ? (
          <>
            <TopNav />
            <ForecastBlock />
            <SensorDataBlock sensorData={sensorData} />
            {plantsData && <PlantListBlock plantsData={plantsData} />}
          </>
          ) : (
            <>
              <TopNav />
              <ForecastBlock />
              <SensorDataBlock sensorData={sensorData} />
              <p>Plantsdata is empty</p>
            </>
          )}
        </div>
        <Navigation />
      </div>
    </>
  );

}
