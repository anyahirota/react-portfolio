import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Skills from './pages/Skills';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/skills" element={<Skills/>} />
    </Routes>
  );
}

export default App;
