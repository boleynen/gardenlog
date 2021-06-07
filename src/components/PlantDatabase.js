import React from "react"
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav'
import PlantsInDatabase from './PlantsInDatabase'
import './PlantDatabase.scss'

export default function PlantDatabase(){
    return(
        <div className="content-wrapper">
            <TopNav pageTitle={"Plant database"}/>
            <div className="content plantDatabase">
            <PlantsInDatabase/>
            </div>
            <Navigation/>
        </div>
    )
}