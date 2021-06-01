import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

function LineChart(props){
    let data = props.data;
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