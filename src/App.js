import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import JavaFullStack from './components/JavaFullStack';
import PythonFullStack from './components/PythonFullStack';
import MernStack from './components/MernStack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/java-fullstack-course-in-coimbatore" element={<JavaFullStack />} />
        <Route path="/python-fullstack-course-in-coimbatore" element={<PythonFullStack />} />
        <Route path="/mern-stack-course-in-coimbatore" element={<MernStack />} />
        <Route path="*" element={<Navigate to="/java-fullstack-course-in-coimbatore" />} />
      </Routes>
    </Router>
  );
}

export default App;
