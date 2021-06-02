import React from 'react';
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import './PlantDetails.scss'

function PlantDetails(props){
    console.log(props.location.plantsData)
    let img = props.location.plantsData.img
    let water = props.location.plantsData.water

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