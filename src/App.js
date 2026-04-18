import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import JavaFullStack from './components/JavaFullStack';
import PythonFullStack from './components/PythonFullStack';
import MernStack from './components/MernStack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/javafullstack" element={<JavaFullStack />} />
        <Route path="/pythonfullstack" element={<PythonFullStack />} />
        <Route path="/mernstack" element={<MernStack />} />
        <Route path="*" element={<Navigate to="/javafullstack" />} />
      </Routes>
    </Router>
  );
}

export default App;
