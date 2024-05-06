import React from 'react';
import NavBar from '../NavBar/NavBar'; // NavBar 컴포넌트를 올바르게 임포트하세요
import styles from './CourseWorkPage.module.css';

function CourseWorkPage() {
  return (
    <div>
      <NavBar /> {/* NavBar 컴포넌트 사용 */}
      <div className={styles.container}>
        <h1 className={styles.heading}>Coursework</h1>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2>Web Development</h2>
            <p>This course covers HTML, CSS, JavaScript, and React.</p>
          </div>
          <div className={styles.card}>
            <h2>Data Science</h2>
            <p>Learn about data analysis, Python, and machine learning.</p>
          </div>
          {/* 추가 카드 컴포넌트 */}
        </div>
      </div>
    </div>
  );
}

export default CourseWorkPage;
