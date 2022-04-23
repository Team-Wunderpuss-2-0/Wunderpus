import React, { useState, useEffect } from "react";
import Axios from "axios";
import { current } from "@reduxjs/toolkit";

// we should have a state that the user inputs how many steps there are
// we should have

// function stages

function Progressbar(props) { 
    // steps = total steps 
    const [percent, setPercent] = useState(0)
    const [currentStep, setCurrentStep] = useState(1)
    //make a string depending on step and display it 
    function nextStep(){
        setCurrentStep(currentStep+1)
        setPercent((currentStep/6)*100)
    }
  return (
    <div>
      <h1>Progress bar</h1>
      <div className="progress"> Progress Bar</div>
      <progress max='100' value={`${percent}`}>
      </progress>
      <br></br>
      
      <button onClick={(e) => nextStep()}> Next step </button>
    </div>
  );
}

export default Progressbar;
