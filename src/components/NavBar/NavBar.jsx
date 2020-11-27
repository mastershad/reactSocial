import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav className={styles.nav}>
       
      <div className={styles.item}>
        <NavLink to="/Profile" activeClassName={styles.activeLink}><div>Profile</div></NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/Dialogs" activeClassName={styles.activeLink}><div>Messages</div></NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to=''>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to=''>Music</NavLink>
      </div>
      <div className={`${styles.item} ${styles.settings}`}>
        <NavLink to=''>Settings</NavLink>
      </div>
     
    </nav>
    )
}

export default NavBar;