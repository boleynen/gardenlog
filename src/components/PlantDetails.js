import React from 'react';
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import PlantDetailsStats from './PlantDetailsStats'
import './PlantDetails.scss'

function PlantDetails(props){
    console.log(props.location.plantsData)
    let img = props.location.plantsData.img
    let water = props.location.plantsData.water
    let stats = props.location.plantsData.stats
    let titles = ''
    let values = ''
    // console.log(Object.entries(stats).length)


    return(
        <div className='content-wrapper'>
            <TopNav />
            <div className='content'>
            <div className="plantDetails">
                <h1>Plant informatie</h1>
                <div className="plantDetails__img">
                    <img src={img} alt="" />
                </div>
                <div className="plantDetails__info">
                {/* {
                    Object.entries(stats).forEach(val => {
                        <PlantDetailsStats statsTitle={val[0]} statsValue={val[1]}/>
                    })
                } */}
                </div>
            </div>
            <div className="plantHistory">

            </div>
            </div>
        <Navigation />
    </div>
    )
}

export default PlantDetails;