import React, { useState, useEffect } from "react"
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav'
import { Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import app from "../firebase"
import './Profile.scss'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const [user, setUser] = useState("");

  const database = app.database();
  const userId = app.auth().currentUser.uid
  const databaseRef = database.ref(`users/` + userId)

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  useEffect(() => {
    databaseRef.once('value').then((snapshot) => {
      var firstname = snapshot.val().firstname;
      var lastname = snapshot.val().lastname;
      var user = firstname + " " + lastname;
      setUser(user)
    })
  }, [])

  return (
    <>
    <div className="content-wrapper">
      <TopNav pageTitle="Profiel"/>
        <div className="content profile">
          {user != "" ? (
            <h2 className="">{user}</h2>
          ): (
            <p>Loading</p>
            )}
            {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="w-100 text-center btn btn-primary">
          Update profiel
          </Link>
          <div className="w-100 text-center mt-2 logout">
            <Button variant="link" onClick={handleLogout}>
                Uitloggen
            </Button>
          </div>
        </div>
      <Navigation/>
    </div>
    </>
  )
}