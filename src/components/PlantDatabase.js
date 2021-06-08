import React, { useState} from "react"
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav'
import PlantsInDatabase from './PlantsInDatabase'
import './PlantDatabase.scss'

export default function PlantDatabase(){

    const [isDatabase, setIsDatabase] = useState(true)

    return(
        <div className="content-wrapper">
            <TopNav pageTitle={"Plant database"}/>
            <div className="content plantDatabase">
                <PlantsInDatabase isDatabase={isDatabase}/>
            </div>
            <Navigation/>
        </div>
    )
}