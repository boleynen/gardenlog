import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './ButtonMedium.scss';
function ButtonMedium(props) {
  // Declare a new state variables
  const [buttonText, setButtonText] = useState(props.buttonText);
  const [buttonLink, setButtonLink] = useState(props.buttonLink);
  return (
    <Link to={{pathname: buttonLink }} className={'buttonMedium'}>
      <p className={'buttonMedium__text'}>{buttonText}</p>
    </Link>
  );
}

export default ButtonMedium;
