import React, { useState} from "react"
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav'
import PlantsInDatabase from './PlantsInDatabase'
import Loader from './Loader'
import './PlantDatabase.scss'

export default function PlantDatabase(){

    const [isDatabase, setIsDatabase] = useState(true)
    const [loading, setLoading] = useState(true)

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