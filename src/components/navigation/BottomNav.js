import React, { useState, useEffect } from "react"
import './BottomNav.scss';
import { Link } from "react-router-dom"

export default function Navigation() {

  return (
    <>
        <div className="bottomNav">
            <Link className="bottomNav__item weather" to="/weather"></Link>
            <Link className="bottomNav__item home" to="/"></Link>
            <Link className="bottomNav__item calendar" to="/calendar"></Link>
            <Link className="bottomNav__item profile" to="/profile"></Link>
            <Link className="bottomNav__item database" to="/plant-database"></Link>
        </div>
    </>
  )
}