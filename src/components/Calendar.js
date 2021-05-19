import React from 'react'
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import { Container } from "react-bootstrap"

function Calendar() {
    return (
        <>
            <div className="content-wrapper">
                <div className="content">
                    <TopNav />
                    <h1>Kalender</h1>
                </div>
                <Navigation/>
            </div>
        </>
    )
}

export default Calendar
