import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <Link className={styles.navItem} to="/">Home</Link>
            <Link className={styles.navItem} to="/about">About</Link>
            <Link className={styles.navItem} to="/coursework">Coursework</Link>
        </nav>
    );
}

export default NavBar;
