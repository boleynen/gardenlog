import React, { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import app from '../firebase';
import './AddPlants.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PlantListItem from './dashboard/PlantListItem';
import Loader from './Loader';

const database = app.database();

export default function PlantsInDatabase(props) {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const [plantsListState, setPlantsListState] = useState([
    {
      id: '',
      checked: false,
    },
  ]);
  const [forDatabase, setForDatabase] = useState(props.isDatabase);
  const newPlantsList = [];

  useEffect(() => {
    setLoading(true);

    console.log(props.isDatabase);
    database.ref(`plants/`).on('value', (plantsList) => {
      const plants = plantsList.val();

      plants.forEach(function (plant) {
        console.log(plant);
        newPlantsList.push({
          id: plant.id,
          name: plant.name,
          latName: plant.latName,
          img: plant.img,
          checked: false,
          stats: plant.stats,
          info: plant.info,
        });
      });

      //   console.log('npl', newPlantsList);
      setPlantsListState(newPlantsList);
    });
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  function handleChange(e) {
    setLoading(true);
    plantsListState.forEach(function (plant) {
      if (plant.id === e.target.id) {
        if (plant.checked === true) {
          newPlantsList.push({
            id: plant.id,
            name: plant.name,
            img: plant.img,
            checked: false,
          });
        } else {
          newPlantsList.push({
            id: plant.id,
            name: plant.name,
            img: plant.img,
            checked: true,
          });
        }
      } else {
        if (plant.checked === true) {
          newPlantsList.push({
            id: plant.id,
            name: plant.name,
            img: plant.img,
            checked: true,
          });
        } else {
          newPlantsList.push({
            id: plant.id,
            name: plant.name,
            img: plant.img,
            checked: false,
          });
        }
      }
    });

    console.log(newPlantsList);
    setPlantsListState(newPlantsList);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }

  function handleSubmit(e) {
    e.preventDefault();
    function addUserPlants() {
      const userId = app.auth().currentUser.uid;
      plantsListState.forEach(function (plant) {
        database.ref(`user_plants/` + userId).push({
          plant_id: plant.id,
          owned: plant.checked,
        });
      });

      history.push('/');
    }
    addUserPlants();
  }

  const databasePlantsList = () => {
    return (
      <>
        {loading === false ? (
          plantsListState.map((plant, index) => (
            <Link
              key={index}
              to={{ pathname: '/database-plant-details', plantsData: plant }}
            >
              <PlantListItem plant={plant} />
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </>
    );
  };

  const introAddPlantsList = () => {
    return (
      <>
        {loading === false ? (
          <Form onSubmit={handleSubmit}>
            {plantsListState.map((plant, index) => (
              <div key={index} className='selectPlant'>
                <div className='selectPlant__img'>
                  <img src={`${plant.img}`} alt={`${plant.name}`} />
                </div>
                <Form.Check
                  custom
                  checked={plant.checked}
                  type='checkbox'
                  value={plant.checked}
                  id={`${plant.id}`}
                  className='selectPlant__checkbox'
                  label={`${plant.name}`}
                  onChange={handleChange}
                />
              </div>
            ))}
            <Button className='' type='submit'>
              Voltooi &nbsp; <FontAwesomeIcon icon={faAngleRight} />
            </Button>
          </Form>
        ) : (
          <Loader />
        )}
      </>
    );
  };

  return (
    <>{forDatabase === false ? introAddPlantsList() : databasePlantsList()}</>
  );
}