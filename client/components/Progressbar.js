import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { current } from '@reduxjs/toolkit';
import { styled } from '@mui/material/styles';

// we should have a state that the user inputs how many steps there are
// we should have

// function stages
import { Box, Typography } from '@mui/material';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import progressScores from '../constants/progressScores';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  marginRight: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));
function Progressbar(props) {
  const score = progressScores.find(
    (pr) => pr.progress === props.progress
  ).score;
  return (
    <>
      <BorderLinearProgress variant='determinate' value={(score / 6) * 100} />
      <Typography variant='body2' color='text.secondary' ml={1}>
        {props.progress}{' '}
      </Typography>
    </>
  );
}

export default Progressbar;
