import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import ProgressBar from './Progressbar.js';
import { progressTypes } from '../constants/formFields.js';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { Container, Box, Button, Card } from '@mui/material';

function CardApplication(props) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [progress, setProgress] = useState(props.progress);
  const appId = props._id;
  const remove = () => {
    props.deleteApp(appId);
  };

  const handleChange = (e) => {
    setProgress(e.target.value);
  };

  const handleProgressUpdate = () => {
    console.log({ progress });
    props.updateApp(appId, { progress });
    setIsEditing(false);
  };

  const editComponent = () => {
    if (!isEditing)
      return (
        <Button variant='contained' onClick={() => setIsEditing(true)}>
          Update progress
        </Button>
      );
    else
      return (
        <Grid container>
          <Grid item xs={12}>
            <TextField
              required
              id='progress'
              name='progress'
              label='Where in the pipeline are you with this posting?'
              select
              fullWidth
              autoComplete='given-name'
              value={progress}
              onChange={handleChange}
              variant='standard'
            >
              {progressTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' onClick={handleProgressUpdate}>
              Save
            </Button>
            <Button variant='contained' onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      );
  };

  return (
    <Card variant='outlined' id='cardApplication'>
      <div className='cardInfo-wrapper'>
        <div className='cardInfo'>
          <strong>Company: </strong>
          {props.company_name}
        </div>
        <div className='cardInfo'>
          <strong>Job Title: </strong>
          {props.title}
        </div>
        <div className='cardInfo'>
          <strong>Job Posting: </strong>
          {props.url}{' '}
        </div>
        <ProgressBar progress={props.progress} />
      </div>
      <div className='cardInfo-buttons'>
        {editComponent()}
        <Button
          variant='outlined'
          onClick={() => {
            remove();
          }}
        >
          Delete
        </Button>
      </div>
    </Card>
    //  <div class="col s12 m7">
    //     <h2 class="header">Horizontal Card</h2>
    //     <div class="card horizontal">
    //     <div class="card-image">
    //         <img src="https://lorempixel.com/100/190/nature/6">
    //     </div>
    //     <div class="card-stacked">
    //         <div class="card-content">
    //         <p>I am a very simple card. I am good at containing small bits of information.</p>
    //         </div>
    //         <div class="card-action">
    //         <a href="#">This is a link</a>
    //         </div>
    //     </div>
    //     </div>
    // </div>
  );
}

export default CardApplication;
