import React from 'react'
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import { Container } from "react-bootstrap"

function Calendar() {
    return (
        <>
            <div className="content-wrapper">
                <TopNav  pageTitle={"Kalender"}/>
                <div className="content">
                    <h1>hier komt kalender content</h1>
                </div>
                <Navigation/>
            </div>
        </>
    )
}

export default Calendar
