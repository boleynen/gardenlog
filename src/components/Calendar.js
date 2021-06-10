import React, {useEffect, useState} from 'react'
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import Loader from "./Loader"
import './Calendar.scss'

function Calendar() {
    const [loading, setLoading] = useState(false)

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
                <TopNav  pageTitle={"Kalender"}/>
                <div className="content calendar">
                    {loading === false ? (
                        <h1>hier komt kalender content</h1>
                    ) : (
                        <Loader/>
                    )}
                </div>
                <Navigation/>
            </div>
        </>
    )
}

export default Calendar
