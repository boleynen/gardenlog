import React from 'react'
import Navigation from './Navigation'
import { Container } from "react-bootstrap"

function Calendar() {
    return (
        <>
            <div className="content-wrapper">
                <Container className="content">
                    <h1>Kalender</h1>
                </Container>
                <Navigation/>
            </div>
        </>
    )
}

export default Calendar
