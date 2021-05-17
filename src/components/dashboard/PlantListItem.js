import React, { useState } from 'react';
import './PlantListItem.scss';

function PlantListItem(props) {
  // Declare a new state variables
  const [plant, setPlant] = useState(props.plant);
  console.log(plant);
  return (
    <li className={'plantListItem'}>
      <img className={'plantListItem__img'} src={plant.image} alt='' />
      <h1 className={'plantListItem__title'}>{plant.name}</h1>
    </li>
  );
}

export default PlantListItem;
