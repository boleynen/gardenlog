import React, { useState, useEffect } from 'react';
import './BottomNav.scss';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <div className='bottomNav'>
        <NavLink
          className='bottomNav__item weather'
          activeClassName='bottomNav__item weather__active'
          to='/weather'
        ></NavLink>

        <NavLink
          className='bottomNav__item calendar'
          activeClassName='bottomNav__item calendar__active'
          to='/calendar'
        ></NavLink>

        <NavLink
          className='bottomNav__item home'
          activeClassName='bottomNav__item home__active'
          to='/dashboard'
        ></NavLink>

        <NavLink
          className='bottomNav__item database'
          activeClassName='bottomNav__item database__active'
          to='/plant-database'
        ></NavLink>

        <NavLink
          className='bottomNav__item profile'
          activeClassName='bottomNav__item profile__active'
          to='/profile'
        ></NavLink>
      </div>
    </>
  );
}
