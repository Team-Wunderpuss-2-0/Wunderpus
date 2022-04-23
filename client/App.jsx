import React, {useState, useEffect} from 'react';
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import Progressbar from './components/Progressbar.js'




function App(){
    return(
      <div>
        <Progressbar></Progressbar>
        <Signup></Signup>
        <Login></Login>
      </div>
    );
}

    
  


export default App;