import React, { useRef,  useEffect, useState} from 'react';
import { Form, Button, Container } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import app from "../firebase"
import './AddPlants.scss';

const database = app.database();

export default function AddPlants() {
    
    const history = useHistory()
    const [plantsListState, setPlantsListState] = useState([{
        'id' : "",
        'checked' : false,
    }]);

    // const [userPlants, setUserPlants] = useState([''])

    const newPlantsList = [];

    useEffect(() => {
        database.ref(`plants/`).on('value', (plantsList) => {
            const plants = plantsList.val();

            plants.forEach(function(plant){
                newPlantsList.push({
                            'id' : plant.id,
                            'name' : plant.name,
                            'img' : plant.img,
                            'checked' : false,
                        })
            })

            console.log(newPlantsList)
            setPlantsListState(newPlantsList);

        });
    }, [])

    function handleChange(e){
        // console.log(e.target.id)
        
        plantsListState.forEach(function(plant){
            if(plant.id === e.target.id){
                if(plant.checked === true){
                    newPlantsList.push({
                        'id' : plant.id,
                        'name' : plant.name,
                        'img' : plant.img,
                        'checked' : false,
                    })
                }else{
                    newPlantsList.push({
                        'id' : plant.id,
                        'name' : plant.name,
                        'img' : plant.img,
                        'checked' : true,
                    })
                }
            }else{
                if(plant.checked === true){
                    newPlantsList.push({
                        'id' : plant.id,
                        'name' : plant.name,
                        'img' : plant.img,
                        'checked' : true,
                    })
                }else{
                    newPlantsList.push({
                        'id' : plant.id,
                        'name' : plant.name,
                        'img' : plant.img,
                        'checked' : false,
                    })
                }
            }
        })
        
        console.log(newPlantsList)
        setPlantsListState(newPlantsList);
        
    }

    function handleSubmit(e){
        e.preventDefault()
        function addUserPlants(){
            const userId = app.auth().currentUser.uid
            plantsListState.forEach(function(plant){
                database.ref(`user_plants/`+ userId).push({
                    plant_id : plant.id,
                    owned : plant.checked
                });
            })
            history.push("/")
        }
        addUserPlants()
    }

    return(
        <>
        <Container className="wrapper">
            <h1 className="introTitle">Welke plantjes heb je?</h1>
            <Form onSubmit={handleSubmit}>
                {plantsListState.map((plant, index) => (
                    <div key={index} className="selectPlant">
                        <div className="selectPlant__img">
                            <img src={`${plant.img}`} alt={`${plant.name}`} />
                        </div>
                        <Form.Check 
                            custom
                            checked = {plant.checked}
                            type= 'checkbox'
                            value = {plant.checked}
                            id = {`${plant.id}`}
                            className="selectPlant__checkbox"
                            label={`${plant.name}`}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <Button className="w-100" variant="link" type="submit">
                    Voltooi
                </Button>
            </Form>
        </Container>
        
        </>
    )
}
