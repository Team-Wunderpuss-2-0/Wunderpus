import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import Progressbar from './components/Progressbar.js'
import AddApplication from './components/AddApplication.js'
import Jobs from './components/Jobs.js';
import Dashboard from './components/Dashboard.js';




function App(){
    return(
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/applications' element={<AddApplication />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/jobs' element={<Jobs />} />
        </Routes>
        </BrowserRouter>
        
      </div>
    );
}

    
  


export default App;
