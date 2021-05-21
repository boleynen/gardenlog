import React, { useRef } from 'react';
import { Form, Button, Card } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import app from "../firebase"
import "./ProfileSetup.scss"

const database = app.database();

export default function ProfileSetup() {
    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const history = useHistory()
    
    async function handleSubmit(e) {
        e.preventDefault()
        function setUserData(firstName, lastName){
            const userId = app.auth().currentUser.uid
            database.ref(`users/`+ userId).set({
                firstname: firstName,
                lastname: lastName
              });
            history.push("/add-plants")
        }

        setUserData(firstnameRef.current.value, lastnameRef.current.value);
      }

    return(
        <>
        <Card className="form-wrap">
            <Card.Body>
            <h2 className="introTitle">Wie ben je ?</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group id="firstname">
                    <Form.Label>Voornaam</Form.Label>
                    <Form.Control type="firstname" ref={firstnameRef} required />
                </Form.Group>
                <Form.Group id="lastname">
                    <Form.Label>Achternaam</Form.Label>
                    <Form.Control type="lastname" ref={lastnameRef} required />
                </Form.Group>
                <Button className="w-100 mt-3 btn-dark" type="submit">
                    Verder
                </Button>

            </Form>
            </Card.Body>
        </Card>
        
        </>
    )
}
