import React from "react"
import './BottomNav.scss';

export default function Navigation() {
  return (
    <>
        <div className="bottomNav">
            <div>
                <a href="/profile">Profiel</a>
            </div>
            <div>
                <a href="/weather">Weer</a>
            </div>
            <div>
                <a href="/">Mijn tuin</a>
            </div>
            <div>
                <a href="/calendar">Kalender</a>
            </div>
        </div>
    </>
  )
}