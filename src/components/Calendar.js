import React, {useEffect, useState} from 'react';
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import Loader from "./Loader";
import './Calendar.scss';
import Calender from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import Moment from 'react-moment';
import app from "../firebase"
import unixToDate from "../functions/unixToDate";
import {forEach} from "react-bootstrap/ElementChildren";


export default function Calendar() {
    const [loading, setLoading] = useState(false)
    const [dateState, setDateState] = useState(new Date())
    const database = app.database();
    const userId = app.auth().currentUser.uid

    function changeDate (e){
        setDateState(e);
        console.log(e);
    }

    let databaseRef = database.ref(`user_notes/` + userId + "/")
    let timeSlots = [];
    let calendarNotes = [];

    function showNotes() {
        let j;
        for (j = 0; j < calendarNotes.length; j++) {
            document.getElementById('calendarNotes').innerHTML += '<p class="item">'  + calendarNotes[j].title + '<br/>'  + calendarNotes[j].desc + '</p>'
        }
    }

    useEffect((children, func) => {
        setLoading(true)
        // notities opzoeken
        databaseRef.on('value', (data) =>{
            timeSlots = data.val()
        })

        let i = 0;
        for(const[time, calenderNotesDetails] of Object.entries(timeSlots)){
            calendarNotes[i] = calenderNotesDetails
            i++;
        }
       showNotes()

        // laat de timer vanonder aan de useEffect staan!
        setTimeout(() => {
            setLoading(false)
        }, 800);
    }, [])
    return (
        <>
            <div className="content-wrapper">
                <TopNav pageTitle={"Kalender"}/>
                <div className="calender">
                    <Calender
                        value={dateState}
                        onChange={changeDate}
                    />
                </div>
                <div className="dateName">
                    <Moment format="dddd DD/MM">{dateState}</Moment>
                </div>
                <div id="calendarNotes">
                </div>
                <Navigation/>
            </div>
        </>
    )
}