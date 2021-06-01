import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

function LineChart(props){
    let [waterData, setWaterData] = useState(props.waterData)
    let [waterDataKeys, setWaterDataKeys] = useState([]);
    let [waterDataValues, setWaterDataValues] = useState([]);
    let [waterDataHours, setWaterDataHours] = useState([]);
    let [graphHours, setGraphHours] = useState([]);
    let [graphValues, setGraphValues] = useState([]);

    let [data, setData] = useState({
        labels: graphHours,
        datasets: [{
            label: '',
            data: [],
            borderColor: [],
            tension: 0.3,
            borderWidth: 4,
        }]
    })
    let color = props.color;

    let hoursArray = [];
    let hoursInGraph = [];
    let valuesInGraph = [];

    const unixToTime = (u) =>{
        var timestamp = u; // UNIX timestamp in seconds
        var xx = new Date();
        xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
        return(xx.toLocaleTimeString('nl-NL')); // the Day
    }
    
    useEffect(() => {
        setWaterDataKeys(Object.keys(waterData));
        setWaterDataValues(Object.values(waterData));
        
        waterDataKeys.map((key) => {
            let time = unixToTime(key)
            hoursArray.push(time.slice(0,5))
        })

        let waterDataHoursSet = [...new Set(hoursArray)]
        hoursArray = waterDataHoursSet;
        console.log('hours:', hoursArray)

        setWaterDataHours(hoursArray);

        console.log(hoursArray)
        
        // console.log(waterDataValues)

        // for(let i=0; i<hoursArray.length; i+=30){
        //     // console.log('f;', waterDataHours[i])
        //     hoursInGraph.push(hoursArray[i])
        // }

        // for(let i=0; i<waterDataValues.length; i+=30){
        //     // console.log('f;', waterDataValues[i])
        //     valuesInGraph.push(waterDataValues[i])
        // }

        // console.log(Object.keys(waterData))

        // setGraphHours(hoursInGraph)
        // setGraphValues(valuesInGraph)

        // console.log(lastTime, lastValues)
        


        


        setData({
            labels: hoursArray,
            datasets: [{
                label: 'Vochtigheid',
                data: props.waterData,
                borderColor: color,
                tension: 0.3,
                borderWidth: 4,
            }]
        })
    }, [])


    return(
        <>
        {/* <Line data={data}/> */}

        {data != "" ? (
            data && <Line data={data}/>
        ) : (
            <p>We konden geen data ophalen.</p>
        )}
        </>
    )
}

export default LineChart