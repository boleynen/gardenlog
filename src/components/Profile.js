import React, { useState } from "react"
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav'
import { Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <div className="content-wrapper">
      <Container className="content">
      <TopNav />
        <Card className="reg-login-wrap">
          <Card.Body>
            <div className="reg-login">
              <h2 className="text-center mb-4">Mijn profiel</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update profiel
              </Link>
              <div className="w-100 text-center mt-2 logout">
                <Button variant="link" onClick={handleLogout}>
                    Uitloggen
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <Navigation/>
    </div>
    </>
  )
}