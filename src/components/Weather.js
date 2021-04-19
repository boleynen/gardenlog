import React from 'react'
import Navigation from './Navigation'
import { Container } from "react-bootstrap"

function Weather() {
    return (
        <>
        <div className="content-wrapper">
            <Container className="content">
                <h1>Het weer</h1>
            </Container>
            <Navigation/>
        </div>
        </>
    )
}

export default Weather
