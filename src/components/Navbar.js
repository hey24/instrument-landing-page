import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='Container'>
      <div className="NavbarContent">
        <h2 className='Logo'>INSTRUMENT</h2>
        <ul className="LinksList">
          <li>WHAT WE DO</li>
          <li>WHO WE ARE</li>
          <li>BEING HERE</li>
          <li>CAREERS</li>
        </ul>
      </div>
    </div>
  )
}
