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
  let [sensorData, setSensorData] = useState([]);
  const [plantsData, setPlantsData] = useState([]);
  var [waterData, setWaterData] = useState([]);

  const database = app.database();
  const userId = app.auth().currentUser.uid
  let databaseRef = database.ref(`user_plants/` + userId)
  let databasePlantsRef = database.ref(`plants/`)
  let databaseWaterSensorRef = database.ref(`arduino_data/water/`)

  // functie voor lege values in objecten eruit te filteren
  Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

  function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
  }

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
    })

    setPlantsData(responseFilteredPlants)

    var responseWaterValues = [];
    let waterIcon = '';
    let waterClass = '';
    let waterMessage = '';
    let tempMessage = '';
    let lightMessage = '';

    databaseWaterSensorRef.on('value', (snapshot) =>{
      var waterValues = snapshot.val();
      responseWaterValues = [];

      setWaterData(waterValues)
      const waterValuesArr = Object.values(waterValues)
      const water = waterValuesArr[waterValuesArr.length - 1]

      if(water<=20){
        waterIcon = faExclamation
        waterClass = 'warning'
        waterMessage = 'Je planten hebben dorst. Geef ze water!!'
      }else if(water > 200){
        waterIcon = faExclamation
        waterClass = 'warning'
        waterMessage = 'Geef je planten zeker niet nog water, ze verdrinken bijna!'
      }else{
        waterIcon = faHeart
        waterClass = 'safe'
        waterMessage = 'Je planten doen het goed!'
      }
      
      setSensorData([
        {
          data: '23°',
          title: 'Temperatuur',
          icon: faHeart,
          color: '#F88484',
          class: 'safe',
          status: tempMessage
        },
        {
          data: water+'%',
          title: 'Vochtigheid',
          icon: waterIcon,
          color: '#9ED3FC',
          class: waterClass,
          status: waterMessage
        },
        {
          data: '89%',
          title: 'Licht',
          icon: faHeart,
          color: '#FFDB5E',
          class: 'safe',
          status: lightMessage
        },
      ])
      // console.log(sensorData)
    })

  }, [])


  return (
    <>
      <div className='content-wrapper'>
        <div className='content'>
          <TopNav />
          <ForecastBlock />

          {sensorData != "" ? (
              sensorData && <SensorDataBlock sensorData={sensorData} />
          ) : (
              <p>We konden geen data ophalen.</p>
          )}

          {plantsData != "" ? (
              plantsData && <PlantListBlock plantsData={plantsData} />
          ) : (
              <p>Nog geen planten!</p>
          )}

        </div>
        <Navigation />
      </div>
    </>
  );

}
