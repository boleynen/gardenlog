import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

function LineChart(props){
    let [waterData, setWaterData] = useState(props.waterData)
    let [graphHours, setGraphHours] = useState([]);
    let [data, setData] = useState({
        labels: ["02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","24:00"],
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

    const unixToTime = (u) =>{
        var timestamp = u; // UNIX timestamp in seconds
        var xx = new Date();
        xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
        return(xx.toLocaleTimeString('nl-NL')); // the Day
    }
    
    useEffect(() => {
        
        var d = new Date();
        d.setHours(0,0,0,0); // last midnight
        let lastMidnight = d.getTime()/1000;

        Object.keys(waterData).map((key) => {
            if(key > lastMidnight ){
                let time = unixToTime(key)
                time = time.slice(0,5)
                if(time == "02:00" || time == "04:00" || time == "06:00" || time == "08:00" || time == "10:00" || time == "12:00" || time == "14:00" || time == "16:00" || time == "18:00" || time == "20:00" || time == "22:00" || time == "24:00"){
                    hoursArray.push(time)
                }
            }
        })

        hoursArray = [...new Set(hoursArray)]

        data = {
            labels: hoursArray,
            datasets: [{
                label: 'Vochtigheid',
                // data: props.waterData,
                data: [1,2,3,4,5,6,7,8,9,10],
                borderColor: color,
                tension: 0.3,
                borderWidth: 4,
            }]
        }

        setData(data)

    }, [])

    return(
        <>
        {data != "" ? (
            data && <Line data={data}/>
        ) : (
            <p>We konden geen data ophalen.</p>
        )}
        </>
    )
}

export default LineChart