import React, {useState, useEffect} from 'react';
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import PlantDetailsStats from './PlantDetailsStats'
import './PlantDetails.scss'

function PlantDetails(props){
    // console.log(props.location.plantsData)
    let id = props.location.plantsData.id
    let img = props.location.plantsData.img
    let statsArray = props.location.plantsData.stats
    let notes = props.location.plantsNotes

    let [plantNotes, setPlantNotes] = useState(['Nog geen notities!'])

    // console.log('notes:', props.location.plantsNotes)

    const unixToDate = (unix) => {
        console.log(unix)
        unix.map(function(unixDate){
            const date = new Date(unixDate*100);
            let weekday = date.toLocaleString('nl-NL', { weekday: 'long' });
            weekday = weekday[0].toUpperCase() + weekday.substring(1);
            let day = date.toLocaleString('nl-NL', { day: 'numeric' });
            let month = date.toLocaleString('nl-NL', { month: 'long' });
            const today = weekday + ' ' + day + ' ' + month;
            console.log(today)
        })
    }

    useEffect(() => {
        notes.forEach((note) => {
            // console.log('note:', note)
            var plantId = note[0].plant_id
            var plantNote = note[1]
            // console.log('id:', plantId, 'note:', plantNote)
            if(plantId == id){
                // console.log(plantNote)
                setPlantNotes(plantNote)
            }
        })
    }, [])

    
    return(
        <div className='content-wrapper'>
            <TopNav />
            <div className='content'>
            <div className="plantDetails">
                <h1>Plant informatie</h1>
                <div className="plantDetailsBlock">
                    <div className="plantDetailsBlock__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="plantDetailsBlock__info">
                        {Object.entries(statsArray).map(function(key, index) {
                            return(
                                <PlantDetailsStats key={index} statsTitle={key[0]} statsValue={key[1]}/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="plantHistory">
                <h1>Plant geschiedenis</h1>
                <div className="plantHistoryBlock">
                    {
                            // Object.values(plantNotes).map(key => {
                            //     <p>{console.log(key)}</p>
                            // })
                            unixToDate(Object.keys(plantNotes))
                            

                    }
                    
                </div>
            </div>
            </div>
        <Navigation />
    </div>
    )
}

export default PlantDetails;