import React, {useEffect, useState} from 'react';
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import Loader from "./Loader";
import './Calendar.scss';
import Calender from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import Moment from 'react-moment';

export default function Calendar() {
    const [loading, setLoading] = useState(false)
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }

    useEffect(() => {
        setLoading(true)
        // roep hieronder kalender aan





        // laat de timer vanonder aan de useEffect staan!
        setTimeout(() => {
            setLoading(false)
        }, 800);
    }, [])
    return (
        <>
            <div className="content-wrapper">
                <TopNav className="title"  pageTitle={"Kalender"}/>
                <div className="calender">
                    <Calender
                        value={dateState}
                        onChange={changeDate}
                    />
                </div>
                <div className="dateName">
                    <Moment format="dddd DD/MM">{dateState}</Moment>
                </div>
                <Navigation/>
            </div>
        </>
    )
}