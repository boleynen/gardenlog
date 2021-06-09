import React, { useState } from 'react';
import './PlantListItem.scss';

function PlantListItem(props) {
  // Declare a new state variables
  return (
    <li className={'plantListItem'}>
      <img className={'plantListItem__img'} src={props.plant.img} alt='' />
      <h1 className={'plantListItem__title'}>{props.plant.name}</h1>
    </li>
  );
}

export default PlantListItem;
