import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import '../css/app.css';
import planet from '../img/planet.png';
import styles from '../css/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.title}>
        <img src={planet} alt="logo" />
        <h2>Space Travelers &apos; Hub</h2>
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink className={styles.navLink} to="/">Rocket</NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="./Missions">Missions</NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="./Profile">My profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
