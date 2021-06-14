import React, {useEffect, useState, useRef} from 'react';
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import PlantDetailsStats from './PlantDetailsStats'
import PlantDetailsHistory from './PlantDetailsHistory'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ButtonMedium from './navigation/ButtonMedium'
import app from "../firebase"
import Loader from "./Loader"
import './PlantDetails.scss'

const database = app.database();

function PlantDetails(props){
    const [loading, setLoading] = useState(false)
    let [notes, setNotes] = useState('')
    
    let img = props.location.plantsData.img
    let plant_id = props.location.plantsData.id
    // console.log(props.location.plantsData)
    let stats = props.location.plantsData.stats
    let statsArr = Object.entries(stats)
    // let allNotes = props.location.plantsNotes
    let [allNotes, setAllNotes] = useState(props.location.plantsNotes)

    // console.log(allNotes)
    let notesArr = []
    
    const [show, setShow] = useState(false)
    
    const userId = app.auth().currentUser.uid
    const database = app.database();
    
    const databaseRef = database.ref(`user_plants/` + userId + "/" + plant_id + "/" + 'notes')
    
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const descRef = useRef()

    function handleSubmit(e){
      e.preventDefault();
      let unixMs = new Date().getTime()/1000
      let unix = Math.floor(unixMs)
      
      function setUserNote(date, inputDesc){
        databaseRef.child(date).set({
            desc: inputDesc
        })
      }

      setUserNote(unix, descRef.current.value)
    }

    useEffect(() => {
        setLoading(true)

        allNotes.forEach(function(val){
            console.log('sd',val[0].plant_id)
            console.log('id',plant_id)

            if(val[0].plant_id === plant_id){
                // console.log(val[1])
                notesArr.push(Object.entries(val[1]))
            }
        })

        // console.log(notesArr)

        notesArr = notesArr[0]
        setNotes(notesArr)

        setTimeout(() => {
            setLoading(false)
        }, 800);

    }, [])

    return(
        <div className='content-wrapper'>
            <TopNav />
            <div className='content'>
                {loading === false && notes != "" ? (
                    <>
                    <div className="plantDetails">
                        <h1>Plant informatie</h1>
                        <div className="plantDetails__wrap">
                            <div className="plantDetails__img">
                                <img src={img} alt="plant foto" />
                            </div>
                            <div className="plantDetails__info">
                                <PlantDetailsStats statsTitle={statsArr[0][0]} statsValue={statsArr[0][1]}/>
                                <PlantDetailsStats statsTitle={statsArr[1][0]} statsValue={statsArr[1][1]}/>
                                <PlantDetailsStats statsTitle={statsArr[2][0]} statsValue={statsArr[2][1]}/>
                                <PlantDetailsStats statsTitle={statsArr[3][0]} statsValue={statsArr[3][1]}/>
                            </div>
                        </div>
                    </div>
                    <div className="plantHistory">
                        <h1>Plant geschiedenis</h1>
                        <div className="plantHistory__wrap">
                        <ul id="plantHistory__list">
                            {!notes ? (
                                <p>Nog geen notities!</p>
                            ) : (
                                notes.map((val, index) => {
                                    return(
                                        <PlantDetailsHistory key={index} noteDate={val[0]} noteDesc={val[1].desc}/>
                                    )
                                })
                            )}
                            {}
                        </ul>
                        </div>
                        <Button className="modalButton" variant="primary" onClick={()=> { handleShow()}}>
                            Notitie toevoegen
                        </Button>
                    </div>
                    </>
                ) : (
                    <Loader/>
                )}
            </div>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                <Modal.Title >Notitie toevoegen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Group className="" id="desc">
                    <Form.Label>Notitie</Form.Label>
                    <Form.Control as="textarea" ref={descRef}/>
                </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button className="modalButton dark" variant="secondary" onClick={handleClose}>
                    Annuleer
                </Button>
                <Button className="modalButton small" variant="primary" onClick={()=>{
                    handleClose(); 
                    setAllNotes([...props.location.plantsNotes])
                    }} type="submit">
                    Opslaan
                </Button>
                </Modal.Footer>
            </Form>
            </Modal>
        <Navigation />
    </div>
    )
}

export default PlantDetails;