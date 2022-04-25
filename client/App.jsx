import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import JobDashboard from './components/JobDashboard.js';
import Dashboard from './components/Dashboard.js';
import LoginTemplate from './components/LoginTemplate';
import SignUpTemplate from './components/SignUpTemplate.js';
import ApplicationTemplate from './components/ApplicationTemplate';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginTemplate />} />
          <Route path='/signup' element={<SignUpTemplate />} />
          <Route path='/applications' element={<ApplicationTemplate />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/jobs' element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
