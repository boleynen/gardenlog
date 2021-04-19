import React from "react"
import { Nav } from "react-bootstrap"

export default function Navigation() {
  return (
    <>
        <Nav className="bottom-nav">
            <Nav.Item>
                <Nav.Link href="/profile">Profiel</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/weather">Weer</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Mijn tuin</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/calendar">Kalender</Nav.Link>
            </Nav.Item>
        </Nav>
    </>
  )
}