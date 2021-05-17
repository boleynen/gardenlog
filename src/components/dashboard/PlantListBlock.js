import React, { useState } from 'react';
import PlantListItem from './PlantListItem';
import ButtonMedium from '../navigation/ButtonMedium';
import './PlantListBlock.scss';

function PlantListBlock(props) {
  // Declare a new state variables
  const [plantsData, setPlantsData] = useState(props.plantsData);

  return (
    <div className={'plantListBlock'}>
      <h1 className={'plantListBlock__title'}>Mijn planten</h1>
      <ul className={'plantListBlock__list'}>
        {plantsData.map((plant, index) => {
          return <PlantListItem key={index} plant={plant} />;
        })}
      </ul>
      <ButtonMedium buttonText={'Plant toevoegen'} />
    </div>
  );
}

export default PlantListBlock;
