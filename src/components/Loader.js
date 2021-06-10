import React from 'react';
import './Loader.scss';

function Loader(props) {
  // Declare a new state variables
  return (
    <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  );
}

export default Loader;


