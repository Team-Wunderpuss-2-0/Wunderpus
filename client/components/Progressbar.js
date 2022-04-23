import React, { useState, useEffect } from "react";
import Axios from "axios";
import { current } from "@reduxjs/toolkit";

// we should have a state that the user inputs how many steps there are
// we should have

// function stages

function Progressbar(props) { 
    // steps = total steps 
    const [percent, setPercent] = useState(0)
    const [totalSteps, setTotalSteps] = useState(0)
    const [currentStep, setCurrentStep] = useState(0)

    // function nextStep(){

    // }
    function nextStep(){
        // console.log(currentStep,totalSteps)
        // setTotalSteps(parseInt(totalSteps))
        console.log(currentStep,totalSteps)
        setPercent((currentStep/totalSteps)*100)
        console.log(percent)

        // setPercent()
        return setCurrentStep(currentStep+1)
    }
  return (
    <div>
      <h1>Progress bar</h1>
      <div className="progress"> Progress Bar</div>
      <progress max='100' value={`${percent}%`}>
      </progress>
      <br></br>
      
      <input type="number" onChange={(e)=> setTotalSteps(parseInt(e.target.value))}></input> <br></br>
      <button onClick={(e) => nextStep()}> Next step </button>
    </div>
  );
}

export default Progressbar;
