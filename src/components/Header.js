import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import '../css/app.css';
import planet from '../img/planet.png';

const Header = () => (
  <header>
    <nav>
      <img src={planet} alt="logo" />
      <h2>Space Travelers &apos; Hub</h2>
      <ul>
        <li>
          <NavLink to="/">Rocket</NavLink>
          <NavLink to="./Missions">Missions</NavLink>
          <NavLink to="./Profile">My profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
