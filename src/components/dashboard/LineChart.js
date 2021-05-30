import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart(){
    const data = {
        labels: ['04u00', '08u00', '12u00', '16u00', '20u00', '24u00'],
        datasets: [{
            label: 'Temperatuur',
            data: [13, 12, 18, 20, 17, 15],
            borderColor: ['#F88484'],
            tension: 0.3,
            borderWidth: 4,
        }]
    }
    // const options = {
    //     scales: {
    //         yAxes: [{
    //             ticks:{
    //                 min:0,
    //                 max: 30,
    //                 stepSize: 10,
    //             }
    //         }]
    //     }
    // }
    return(
        <Line data={data}/>
        // <Line data={data} options={options}/>
    )
}

export default LineChart