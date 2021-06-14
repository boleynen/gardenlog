import React, {useEffect, useState} from 'react';
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import PlantDetailsStats from './PlantDetailsStats'
import PlantDetailsHistory from './PlantDetailsHistory'
import app from "../firebase"
import Loader from "./Loader"
import './PlantDetails.scss'

function PlantDetails(props){
    const [loading, setLoading] = useState(false)
    let [notes, setNotes] = useState('')

    let img = props.location.plantsData.img
    let plant_id = props.location.plantsData.id
    let stats = props.location.plantsData.stats
    let statsArr = Object.entries(stats)
    let allNotes = props.location.plantsNotes
    let notesArr = []
    
    useEffect(() => {
        setLoading(true)

        allNotes.forEach(function(val){
            if(val[0].plant_id === plant_id){
                notesArr.push(Object.entries(val[1]))
            }
        })


        notesArr = notesArr[0]
        setNotes(notesArr)
        
        console.log(notes)

        setTimeout(() => {
            setLoading(false)
        }, 800);

        console.log(props.location)
    }, [])

    return(
        <div className='content-wrapper'>
            <TopNav />
            <div className='content'>
                {loading === false && notes != "" ? (
                    <>
                    <div className="plantDetails">
                        <h1>Plant informatie</h1>
                        <div className="plantDetails__wrap">
                            <div className="plantDetails__img">
                                <img src={img} alt="plant foto" />
                            </div>
                            <div className="plantDetails__info">
                                <PlantDetailsStats statsTitle={statsArr[0][0]} statsValue={statsArr[0][1]}/>
                                <PlantDetailsStats statsTitle={statsArr[1][0]} statsValue={statsArr[1][1]}/>
                                <PlantDetailsStats statsTitle={statsArr[2][0]} statsValue={statsArr[2][1]}/>
                                <PlantDetailsStats statsTitle={statsArr[3][0]} statsValue={statsArr[3][1]}/>
                            </div>
                        </div>
                    </div>
                    <div className="plantHistory">
                        <h1>Plant geschiedenis</h1>
                        <div className="plantHistory__wrap">
                        <ul id="plantHistory__list">
                            {notes.map((val, index) => {
                                return(
                                    <PlantDetailsHistory key={index} noteDate={val[0]} noteDesc={val[1]}/>
                                )
                            })}
                        </ul>
                        </div>
                    </div>
                    </>
                ) : (
                    <Loader/>
                )}
            </div>
        <Navigation />
    </div>
    )
}

export default PlantDetails;