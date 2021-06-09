import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import './TopNav.scss';

function TopNav(props) {
  // Declare a new state variables
  const [pageTitle, setPageTitle] = useState(props.pageTitle);
  let history = useHistory();

  return (
    <div className={'topNav'}>
      <div className={'topNav__btnBack'} onClick={() => history.goBack()}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <h1 className={'topNav__pageTitle'}>{pageTitle}</h1>
    </div>
  );
}

export default TopNav;
