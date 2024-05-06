import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import CourseWorkPage from './components/CourseWorkPage/CourseWorkPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/coursework" element={<CourseWorkPage />} />
            </Routes>
        </Router>
    );
}

export default App;
