import React from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './HomePage.module.css';

function HomePage() {
    return (
        <div>
            <NavBar />
            <div className={styles.mainContent}>
                <h1 className={styles.heading}>Welcome to My Website</h1>
                <p className={styles.introText}>This is a simple homepage modeled after the example provided.</p>
            </div>
        </div>
    );
}

export default HomePage;
