import React, { useState } from 'react';
import PlantListItem from './PlantListItem';
import ButtonMedium from '../navigation/ButtonMedium';
import { Link } from "react-router-dom"
import './PlantListBlock.scss';

function PlantListBlock(props) {
  // Declare a new state variables
  const [plantsData, setPlantsData] = useState(props.plantsData);
  const [plantNotes, setPlantNotes] = useState(props.plantNotes);
  return (
    <div className={'plantListBlock'}>
      <h1 className={'plantListBlock__title'}>Mijn planten</h1>
      <ul className={'plantListBlock__list'}>
        {/* {console.log(plantsData)} */}
        {plantsData.map((plant, index) => {
          return(
            <Link key={index} to={{pathname:"/plant-details", plantsData: plant, plantsNotes: plantNotes}}>
              <PlantListItem plant={plant}/>
            </Link>
            )
        })}
      </ul>
      <ButtonMedium buttonText={'Plant toevoegen'} buttonLink={'/plant-database'}/>
    </div>
  );
}

export default PlantListBlock;
