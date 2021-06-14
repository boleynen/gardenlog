import React, { useState, useEffect } from 'react';
import TopNav from './navigation/TopNav';
import Navigation from './navigation/BottomNav';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Loader from './Loader';
import ButtonMedium from './navigation/ButtonMedium';
import './DatabasePlantDetails.scss';

export default function DatabasePlantDetails(props) {
  const img = props.location.plantsData.img;
  const name = props.location.plantsData.name;
  const latName = props.location.plantsData.latName;
  const stats = props.location.plantsData.stats;
  const owned = props.location.plantsData.checked;
  const info = props.location.plantsData.info;
  console.log(info);
  const [loading, setLoading] = useState(true);

  const addPlant = () => {
    return (
      <>
        <ButtonMedium buttonLink='' buttonText={'Plant Toevoegen'} />
      </>
    );
  };

  const plantAlreadyOwned = () => {
    return <p>Je hebt deze plant al toegevoegd!</p>;
  };

  return (
    <div className='content-wrapper'>
      <TopNav pageTitle={name} />
      <div className='content databasePlantDetails'>
        <div className='databasePlantDetails__header'>
          <div className='databasePlantDetails__img'>
            <img src={img} alt='plant image' />
          </div>
          <h1>{name}</h1>
          <h2>{latName}</h2>
        </div>
        <div className='databasePlantDetails__info'>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='0'>
                Water
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>{info.water}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='1'>
                Licht
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>{info.licht}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='2'>
                Temperatuur
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='2'>
                <Card.Body>{info.temperatuur}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='3'>
                Hoe te telen
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='3'>
                <Card.Body>{info.telen}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div className='databasePlantDetails__addPlant'>
          {owned === true ? addPlant() : plantAlreadyOwned()}
        </div>
      </div>
      <Navigation />
    </div>
  );
}
