import React from "react"
import Navigation from "./Navigation"
import { Container } from "react-bootstrap"

export default function Dashboard() {
  return (
    <>
        <div className="content-wrapper">
            <Container className="content">
                <h1>Dashboard</h1>
            </Container>
            <Navigation/>
        </div>
    </>
  )
}