import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './UpdateProfile.scss'

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch((error) => {
        setError("Kon account niet updaten: " + error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div className="content-wrapper">
      <TopNav pageTitle={"Update profiel"}/>
          <div className="content updateProfile">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                  defaultValue={currentUser.email}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Wachtwoord</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="Laat leeg voor hetzelfde wachtwoord"
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Wachtwoord bevestigen</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Laat leeg voor hetzelfde wachtwoord"
                />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Updaten
              </Button>
              <div className="w-100 text-center pt-5">
                <Link to="/profile">Annuleer</Link>
              </div>
            </Form>
          </div>
        <Navigation />
      </div>
     
    </>
  )
}