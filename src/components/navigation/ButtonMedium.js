import React, { useState } from 'react';
import './ButtonMedium.scss';
function ButtonMedium(props) {
  // Declare a new state variables
  const [buttonText, setButtonText] = useState('Button');
  return (
    <div className={'buttonMedium'}>
      <p className={'buttonMedium__text'}>{buttonText}</p>
    </div>
  );
}

export default ButtonMedium;
