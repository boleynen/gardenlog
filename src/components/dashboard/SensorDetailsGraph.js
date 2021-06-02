import React, { useState, useEffect } from 'react';
import LineChart from './LineChart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './SensorDetailsGraph.scss'

// vraag datum van vandaag op (weekdag + dag + maand)
const date = new Date();
console.log(date)
let weekday = date.toLocaleString('nl-NL', { weekday: 'long' });
weekday = weekday[0].toUpperCase() + weekday.substring(1);
let day = date.toLocaleString('nl-NL', { day: 'numeric' });
let month = date.toLocaleString('nl-NL', { month: 'long' });
const today = weekday + ' ' + day + ' ' + month;


// UNIX naar timestamp
const unixToTime = (u) =>{
  var timestamp = u; // UNIX timestamp in seconds
  var xx = new Date();
  xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
  return(xx.toLocaleTimeString('nl-NL')); // the Day
}

function SensorDetailsGraph(props) {
    let waterData = props.waterData;
    let color = props.color;
    let [data, setData] = useState([])
    let [selectedDay, setSelectedDay] = useState(today)
    let hoursArray = [];
    let dataArray = [];

    
    useEffect(() => {
      // vraag laatste tijd van de laatste middernacth op
      var d = new Date();
      d.setHours(0,0,0,0);
      let lastMidnight = d.getTime()/1000;

      // loop over timestamps in database, en kijk welke van vandaag zijn a.h.v laatste middernacht
      Object.keys(waterData).map(function(key, index){
        if(key > lastMidnight ){
          let time = unixToTime(key)
          time = time.slice(0,5)
          if( time == "02:00" || 
              time == "04:00" || 
              time == "06:00" || 
              time == "08:00" || 
              time == "10:00" || 
              time == "12:00" || 
              time == "14:00" || 
              time == "16:00" || 
              time == "18:00" || 
              time == "20:00" || 
              time == "22:00" || 
              time == "24:00"){
              hoursArray.push(time)
              dataArray.push(index/10)
          }
      }
      })

      // verwijderd eventuele dubbele waardes
      hoursArray = [...new Set(hoursArray)]

      data = {
          labels: hoursArray,
          datasets: [{
              label: 'Vochtigheid',
              data: dataArray,
              // data: [1,2,3,4,5,6,7,8,9,10],
              borderColor: color,
              tension: 0.3,
              borderWidth: 4,
          }]
      }

      setData(data)
      console.log(hoursArray)

  }, [])

  function goToPreviousDay(){
    console.log('-')
  }

  function goToNextDay(){
    console.log('+')
  }


  return (
      <>
      <div className={"sensorDetailsGraph"}>
        <div className={"sensorDetailsGraph__day"}>
          <FontAwesomeIcon icon={faAngleLeft} onClick={goToPreviousDay}/>
          <p>{selectedDay}</p>
          <FontAwesomeIcon icon={faAngleRight} onClick={goToNextDay}/>
        </div>
         <LineChart data={data}/>
      </div>
      </>
    );
  }
  
  export default SensorDetailsGraph;