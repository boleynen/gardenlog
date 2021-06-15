import React, { useRef, useState } from 'react';
import { Form, Button, Card } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import usePlacesAutocomplete from '@atomap/use-places-autocomplete'
import app from "../firebase"
import firebase from 'firebase';
import "./ProfileSetup.scss"
import './LocationAutocomplete.scss'

export default function ProfileSetup() {
    const userId = app.auth().currentUser.uid
    const database = app.database();
    var storage = app.storage();

    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const locationRef = useRef()

    const history = useHistory()
    const [fileName, setFileName] = useState('');
    const [location, setLocation] = useState(locationRef);
    
    const [selectedPrediction, setSelectedPrediction] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const { predictions, error } = usePlacesAutocomplete(searchValue)
    
    if (error) {
        console.error(error)
    }
    
    const handlePredictionSelection = (e, prediction) => {
        e.preventDefault()
        setSelectedPrediction(prediction)
    }

    async function setUserImage(image){
        // image naam veranderen naar --userId--.png
        var blob = image.slice(0, image.size, 'image/png'); 
        var newFile = new File([blob], `${userId}.png`, {type: 'image/png'});
        // nieuwe image naam
        let imageName = newFile.name;
        // hier steek je het in de storage
        storage.ref(`${userId}/` + imageName).put(newFile)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const userId = app.auth().currentUser.uid
        // console.log(selectedPrediction)

        function setUserData(firstName, lastName, location){
            // database.ref(`users/`+ userId).set({
            //     firstname: firstName,
            //     lastname: lastName,
            //     location: location
            //   });
            // history.push("/add-plants")
            console.log(firstName, lastName, selectedPrediction)
        }

    //
    setUserData(firstnameRef.current.value, lastnameRef.current.value, selectedPrediction.description);
    }

    return(
        <>
        <div className="content-wrapper intro">
            <div className="logoBlock">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.82 254.19"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M89.82,0q14.73,12.39,29.41,24.74,27.86,23.54,55.63,47.17c1.43,1.22,2.85,3.44,2.85,5.2.15,40,.11,80,.09,119.93a17,17,0,0,1-.35,2.09H99.19v55.06H77.61V199.44H.33c-.1-2.34-.25-4.09-.25-5.84C.07,155.28.11,117,0,78.66a8.62,8.62,0,0,1,3.61-7.49Q45.48,36.74,87.14,2.06C87.9,1.44,88.7.86,89.82,0ZM77,177.7v-137a10.55,10.55,0,0,0-1.69.89c-16.68,14.3-33.4,28.56-49.93,43-1.45,1.27-2.32,4-2.33,6-.15,27.47-.11,54.95-.09,82.42,0,1.45.19,2.9.31,4.59Zm78.93-73.91c-1.17.13-1.57,0-1.8.21q-26.1,18.38-52.16,36.84a4.2,4.2,0,0,0-1.78,2.73c-.13,11.27-.08,22.53-.08,33.64a8.29,8.29,0,0,0,2,.67c16.81.05,33.62,0,50.43.14,3.61,0,3.45-2.13,3.45-4.57q0-21.72,0-43.44ZM131.45,65.38c-10.07,7.51-19.91,14.85-29.72,22.22-.63.48-1.48,1.23-1.49,1.86-.11,7.5-.07,15-.07,23.51L150.1,79.89Zm-31.12-4.77,13.49-10.8L100.33,38.54Z"/></g></g></svg>
                <h1 className="ml-2">Gardenlog</h1>
            </div>
            <div className="content profileSetup">
                <h2 className="">Wie ben je ?</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="firstname">
                        <Form.Label>Voornaam</Form.Label>
                        <Form.Control type="firstname" ref={firstnameRef} required/>
                    </Form.Group>
                    <Form.Group id="lastname">
                        <Form.Label>Achternaam</Form.Label>
                        <Form.Control type="lastname" ref={lastnameRef} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.File  id="profilePicture" 
                                    label="Kies je profielfoto"
                                    onChange={(e) => setUserImage(e.target.files[0])}
                                    required 
                                    />
                    </Form.Group>
                    <Form.Group className="locationSearch">
                    <Form.Label>Locatie van je (moes)tuin</Form.Label>
                        <input
                            required
                            ref={locationRef}
                            name="predictionSearch"
                            value={searchValue}
                            className="form-control"
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <ul>
                            {predictions?.map((prediction) => (
                            <li key={prediction?.place_id}>
                                <button
                                onClick={(e) => handlePredictionSelection(e, prediction)}
                                onKeyDown={(e) => handlePredictionSelection(e, prediction)}
                                >
                                {prediction?.description || 'Not found'}
                                </button>
                            </li>
                            ))}
                        </ul>
                        {searchValue?(
                            <>
                            <h3>
                                Je selecteerde:{' '}
                                {selectedPrediction?.structured_formatting?.main_text || '...'}
                            </h3>
                            <p></p>
                            </>
                        ):(
                            null
                        )}
                    </Form.Group>
                    <Button className="" type="submit">
                        Verder &nbsp; <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                </Form>
            </div>
        </div>
        
        </>
    )
}
