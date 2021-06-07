import React from 'react'
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import { Container } from "react-bootstrap"
import './Calendar.scss'

function Calendar() {
    return (
        <>
            <div className="content-wrapper">
                <TopNav  pageTitle={"Kalender"}/>
                <div className="content calendar">
                    <h1>hier komt kalender content</h1>
                </div>
                <Navigation/>
            </div>
        </>
    )
}

export default Calendar
