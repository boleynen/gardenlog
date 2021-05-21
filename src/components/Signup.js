import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"



export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/profile-setup")
    } catch (error){
      setError("Failed to create an account: " + error)
    }

    setLoading(false)
  }

  return (
    <>
      <Card className="form-wrap">
        <Card.Body className="login-reg">
          <div className="logo d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.82 254.19"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M89.82,0q14.73,12.39,29.41,24.74,27.86,23.54,55.63,47.17c1.43,1.22,2.85,3.44,2.85,5.2.15,40,.11,80,.09,119.93a17,17,0,0,1-.35,2.09H99.19v55.06H77.61V199.44H.33c-.1-2.34-.25-4.09-.25-5.84C.07,155.28.11,117,0,78.66a8.62,8.62,0,0,1,3.61-7.49Q45.48,36.74,87.14,2.06C87.9,1.44,88.7.86,89.82,0ZM77,177.7v-137a10.55,10.55,0,0,0-1.69.89c-16.68,14.3-33.4,28.56-49.93,43-1.45,1.27-2.32,4-2.33,6-.15,27.47-.11,54.95-.09,82.42,0,1.45.19,2.9.31,4.59Zm78.93-73.91c-1.17.13-1.57,0-1.8.21q-26.1,18.38-52.16,36.84a4.2,4.2,0,0,0-1.78,2.73c-.13,11.27-.08,22.53-.08,33.64a8.29,8.29,0,0,0,2,.67c16.81.05,33.62,0,50.43.14,3.61,0,3.45-2.13,3.45-4.57q0-21.72,0-43.44ZM131.45,65.38c-10.07,7.51-19.91,14.85-29.72,22.22-.63.48-1.48,1.23-1.49,1.86-.11,7.5-.07,15-.07,23.51L150.1,79.89Zm-31.12-4.77,13.49-10.8L100.33,38.54Z"/></g></g></svg>
            <h1 className="ml-2">Gardenlog</h1>
          </div>
          <div className="reg-login">
            <h2 className="mb-4">Registreren</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Wachtwoord</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Wachtwoord herhalen</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-2 btn" type="submit">
                Registreren
              </Button>
            </Form>
            <div className="mt-5 w-100 text-center">
              Heb je al een account? <Link to="/login" className="link">Log In</Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}