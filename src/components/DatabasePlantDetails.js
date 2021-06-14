import React, { useState, useEffect } from "react"
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Loader from './Loader'
import ButtonMedium from './navigation/ButtonMedium'
import './DatabasePlantDetails.scss'

export default function DatabasePlantDetails(props){

    const img = props.location.plantsData.img
    const name = props.location.plantsData.name
    const latName = props.location.plantsData.latName
    const stats = props.location.plantsData.stats
    const owned = props.location.plantsData.checked
    const [loading, setLoading] = useState(true)

    const addPlant = () => {
        return(
            <>
            <ButtonMedium buttonLink='' buttonText={'Plant Toevoegen'}/>
            </>
        )
    }

    const plantAlreadyOwned = () => {
        return(
            <>
            <ButtonMedium buttonLink='' buttonText={'Plant Toevoegen'}/>
            </>
        )
    }


    return(
        <div className="content-wrapper">
            <TopNav pageTitle={name}/>
            <div className="content databasePlantDetails">
                <div className="databasePlantDetails__header">
                    <div className="databasePlantDetails__img">
                        <img src={img} alt="plant image" />
                    </div>
                    <h1>{name}</h1>
                    <h2>{latName}</h2>
                </div>
                <div className="databasePlantDetails__info">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Soorten
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Planten
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Verzorging
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic.
                                </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Oogsten
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                </div>
                <div className="databasePlantDetails__addPlant">
                {
                    owned === false
                    ? addPlant()
                    : plantAlreadyOwned()
                }
                </div>
            </div>
            <Navigation/>
        </div>
    )
}