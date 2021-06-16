import React, {useState, useEffect} from 'react';
import unixToDate from '../functions/unixToDate'
import './PlantDetailsHistory.scss'

function PlantDetailsHistory(props){
    let noteDate = props.noteDate
    let noteDesc = props.noteDesc

    return(
        <>
            <li className="note">
                <div className="node green"></div>
                <div>
                    <p>{noteDesc}</p>
                    <p className="date">{unixToDate(noteDate)}</p>
                </div>
            </li>
            <li className="line">
                <div className="divider grey"></div>
            </li>
        </>
    )

}

export default PlantDetailsHistory;