import React, { useState, useEffect } from "react"
import './BottomNav.scss';
import { Link } from "react-router-dom"

// import weatherIcon from '../../assets/icons/weather.png'
// import weatherIconActive from '../../assets/icons/weather-active.png'
// import searchIcon from '../../assets/icons/search.png'
// import searchIconActive from '../../assets/icons/search-active.png'
// import homeIcon from '../../assets/icons/home.png'
// import homeIconActive from '../../assets/icons/home-active.png'
// import calendarIcon from '../../assets/icons/calendar.png'
// import calendarIconActive from '../../assets/icons/calendar-active.png'
// import profileIcon from '../../assets/icons/profile.png'
// import profileIconActive from '../../assets/icons/profile-active.png'

export default function Navigation() {

  return (
    <>
        <div className="bottomNav">
            <Link className="bottomNav__item weather" to="/weather"></Link>
            <Link className="bottomNav__item home" to="/"></Link>
            <Link className="bottomNav__item calendar" to="/calendar"></Link>
            <Link className="bottomNav__item profile" to="/profile"></Link>
        </div>
    </>
  )
}