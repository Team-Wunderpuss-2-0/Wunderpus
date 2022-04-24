import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { current } from '@reduxjs/toolkit';

// we should have a state that the user inputs how many steps there are
// we should have

// function stages

function Progressbar(props) {
  // steps = total steps
  const [percent, setPercent] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  //make a string depending on step and display it
  function nextStep() {
    setCurrentStep(currentStep + 1);
    setPercent((currentStep / 6) * 100);
  }

  const progressScores = [
    { progress: 'Application started', score: 1 },
    { progress: 'Application submitted', score: 2 },
    { progress: 'Phone interview', score: 3 },
    { progress: 'Technical interview', score: 4 },
    { progress: 'Behavioral interview', score: 5 },
    { progress: 'Accepted', score: 6 },
    { progress: 'Rejected', score: 6 },
    { progress: 'Withdrew', score: 6 },
  ];

  const score = progressScores.find(
    (pr) => pr.progress === props.progress
  ).score;
  console.log(score);
  return (
    <div>
      <div className='progress'> Progress Bar</div>
      {/* <progress max='100' value={`${percent}`}></progress> */}
      <progress max='100' value={(score / 6) * 100}></progress>
      {/* <br></br>

      <button onClick={(e) => nextStep()}> Next step </button> */}
    </div>
  );
}

export default Progressbar;
