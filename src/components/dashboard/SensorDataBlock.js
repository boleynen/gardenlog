import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import SensorCardList from './SensorCardList';
import app from "./../../firebase"
import './SensorDataBlock.scss';

function SensorDataBlock(props) {
  // Declare a new state variables
  const sensorData = props.sensorData;

  const [show, setShow] = useState(false)

  const userId = app.auth().currentUser.uid
  const database = app.database();

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const titleRef = useRef()
  const descRef = useRef()

  function handleSubmit(e){
    e.preventDefault();
    let unixMs = new Date().getTime()/1000
    let unix = Math.floor(unixMs)
    
    function setUserNote(date, inputTitle, inputDesc){
      database.ref(`user_notes/` + userId + "/" + date).set({
        title: inputTitle,
        desc: inputDesc
      })
    }
    setUserNote(unix, titleRef.current.value, descRef.current.value)
  }

  return (
    <>
    <div className={'sensorDataBlock'}>
      <SensorCardList   key={props.sensorData} 
                        sensorData={props.sensorData} 
                        waterData={props.waterData}/>
        {sensorData.map((sensor, index) => {
          return (
            <h3 key={index} className={'sensorDataBlock__message'}>
              {sensor.status}
            </h3>
          );
        })}
      <Button className="modalButton" variant="primary" onClick={handleShow}>
        Kalendernotitie toevoegen
      </Button>
    </div>

    <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title >Kalendernotitie toevoegen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="" id="title">
            <Form.Label>Titel</Form.Label>
            <Form.Control type="title" ref={titleRef}/>
          </Form.Group>
          <Form.Group className="" id="desc">
            <Form.Label>Beschrijving (optioneel)</Form.Label>
            <Form.Control as="textarea" ref={descRef}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modalButton dark" variant="secondary" onClick={handleClose}>
            Annuleer
          </Button>
          <Button className="modalButton small" variant="primary" onClick={handleClose} type="submit">
            Opslaan
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
    </>
  );
}

export default SensorDataBlock;
