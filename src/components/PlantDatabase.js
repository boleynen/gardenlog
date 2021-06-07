import React from "react"
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav'
import './PlantDatabase.scss'

export default function PlantDatabase(){
    return(
        <div className="content-wrapper">
            <TopNav pageTitle={"Plant database"}/>
            <div className="content plantDatabase">
            <h1>Plant database</h1>
            </div>
            <Navigation/>
        </div>
    )
}