// src/App.jsx
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkExperience from './components/WorkExperience.jsx'
import AchievementsAndCertifications from './components/Certifications.jsx'
import TechnicalSkills from './components/TechincalSkills.jsx'
import Education from './components/Education.jsx'


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<WorkExperience />} />
        <Route path="/technical" element={<TechnicalSkills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<AchievementsAndCertifications />} />
      </Routes>
    </Router>

  );
}
