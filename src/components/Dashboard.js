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
  var lastWaterValue =
      {
      data: '?',
      title: 'Temperatuur',
      color: '#F88484',
      icon: faExclamation,
      }



  var [tempData, setTempData] = useState([]);
  var lastTempValue =
    {
      data: '?',
      title: 'Vochtigheid',
      color: '#9ED3FC',
      icon: faExclamation,
    }

  var [lightData, setLightData] = useState([]);
  var lastLightValue =
    {
      data: '?',
      title: 'Licht',
      color: '#FFDB5E',
      icon: faExclamation,
    }


  var [plantNotes, setPlantNotes] = useState([]);

  const database = app.database();
  const userId = app.auth().currentUser.uid
  let databaseRef = database.ref(`user_plants/` + userId)
  let databasePlantsRef = database.ref(`plants/`)
  let databaseWaterSensorRef = database.ref(`arduino_data/water/`)
  let databaseTempSensorRef = database.ref(`arduino_data/temp/`)
  let databaseLightSensorRef = database.ref(`arduino_data/light/`)

  useEffect(() => {
    const responseIds = []
    const plantNotes = []

    databaseRef.on('value', (data) =>{
      const userPlantIds = data.val();
      // console.log(userPlantIds)
      

      for (const [plant, plantDetails] of Object.entries(userPlantIds)){
        if(plantDetails.owned === true){
          responseIds.push(
            plantDetails.plant_id
            )
          }

        if(plantDetails.notes || plantDetails.notes != undefined){
          // plantNotes = array van plant id en notities : [plant_id, [note 1, note 2]]
            plantNotes.push([
              {'plant_id' : plantDetails.plant_id}, plantDetails.notes
            ])
          }
        }
    })

    // console.log(plantNotes)
    setPlantNotes(plantNotes)

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
    var responseTempValues = [];
    var responseLightValues = [];
    let waterIcon = '';
    let tempIcon = '';
    let lightIcon = '';
    let waterClass = '';
    let tempClass = '';
    let lightClass = '';
    let waterMessage = '';
    let tempMessage = '';
    let lightMessage = '';


    databaseWaterSensorRef.on('value', (snapshot) =>{
      var waterValues = snapshot.val();
      responseWaterValues = [];

      setWaterData(waterValues)
      const waterValuesArr = Object.values(waterValues)
      const water = waterValuesArr[waterValuesArr.length - 1]

      if(water<=100){
        waterIcon = faExclamation
        waterClass = 'warning'
        waterMessage = 'Je planten hebben dorst. Geef ze water!!'
      }else if(water > 1000){
        waterIcon = faExclamation
        waterClass = 'warning'
        waterMessage = 'Geef je planten zeker niet nog water, ze verdrinken bijna!'
      }else{
        waterIcon = faHeart
        waterClass = 'safe'
        waterMessage = 'Je planten doen het goed!'
      }

      setTimeout(() => {
        lastWaterValue = {
          data: `${water}%`,
          title: 'Vochtigheid',
          icon: waterIcon,
          color: '#9ED3FC',
          class: waterClass,
          status: waterMessage
        }
      }, 50);
    })

    databaseLightSensorRef.on('value', (snapshot) =>{
      var lightValues = snapshot.val();
      responseLightValues = [];

      setLightData(lightValues)
      const lightValuesArr = Object.values(lightValues)
      const light = lightValuesArr[lightValuesArr.length -1]

      if(light<=100){
        lightIcon = faExclamation
        lightClass = 'warning'
        lightMessage = 'Je planten hebben te weinig zon!'
      }else if(light > 1000){
        lightIcon = faExclamation
        lightClass = 'warning'
        lightMessage = 'Je planten gaan bijna verbranden'
      }else{
        lightIcon = faHeart
        lightClass = 'safe'
        lightMessage = 'Je planten hebben genoeg zonlicht!'
      }
      setTimeout(() => {
        lastLightValue = {
          data: `${light}%`,
          title: 'Licht',
          icon: lightIcon,
          color: '#FFDB5E',
          class: lightClass,
          status: lightMessage
        }
      }, 50);
      
    })

    databaseTempSensorRef.on('value', (snapshot) =>{
      var tempValues = snapshot.val();
      responseTempValues = [];

      setLightData(tempValues)
      const tempValuesArr = Object.values(tempValues)
      const temp = tempValuesArr[tempValuesArr.length -1]

      if(temp<=100){
        tempIcon = faExclamation
        tempClass = 'warning'
        tempMessage = 'Je planten hebben het koud!'
      }else if(temp > 1000){
        tempIcon = faExclamation
        tempClass = 'warning'
        tempMessage = 'Je planten hebben het te warm!'
      }else{
        tempIcon = faHeart
        tempClass = 'safe'
        tempMessage = 'Je planten hebben genoeg warmte!'
      }

      setTimeout(() => {
        lastTempValue = {
          data: `${temp}°​C`,
          title: 'Temperatuur',
          icon: tempIcon,
          color: '#F88484',
          class: tempClass,
          status: tempMessage
        }
      }, 50);
      
    })


    setTimeout(() => {
      console.log(sensorData)
      setSensorData([
      lastWaterValue, lastLightValue, lastTempValue
    ])
    }, 200);
    
    

  }, [])

  console.log(waterData)
  return (
    <>
      <div className='content-wrapper'>
        <div className='content'>
          <TopNav />
          <ForecastBlock />

          {sensorData != "" ? (
              sensorData && <SensorDataBlock sensorData={sensorData} waterData={waterData}/>
          ) : (
              <p>We konden geen data ophalen.</p>
          )}

          {plantsData != "" ? (
              plantsData && <PlantListBlock plantsData={plantsData} plantNotes={plantNotes}/>
          ) : (
              <p>Nog geen planten!</p>
          )}

        </div>
        <Navigation />
      </div>
    </>
  );

}


      // setSensorData([
      //   {
      //     data: '?',
      //     title: 'Temperatuur',
      //     icon: faExclamation,
      //     color: '#F88484',
      //     class: 'safe',
      //     status: tempMessage
      //   },
      //   {
      //     data: (water/10)+'%',
      //     title: 'Vochtigheid',
      //     icon: waterIcon,
      //     color: '#9ED3FC',
      //     class: waterClass,
      //     status: waterMessage
      //   },
      //   {
      //     data: '?',
      //     title: 'Licht',
      //     icon: faExclamation,
      //     color: '#FFDB5E',
      //     class: 'safe',
      //     status: lightMessage
      //   },
      // ])
