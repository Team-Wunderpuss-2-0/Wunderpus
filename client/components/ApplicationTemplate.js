import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import MenuItem from '@mui/material/MenuItem';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  jobTypes,
  progressTypes,
  priorityTypes,
} from '../constants/formFields';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function createApplication(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    title,
    url,
    company_name,
    job_type,
    publication_date,
    candidate_required_location,
    salary,
    description,
  } = location.state;

  const parseHtml = (description) => {
    var div = document.createElement('div');
    div.innerHTML = description;
    const text = div.textContent || div.innerText || '';
    return text;
  };

  const [formState, setFormState] = useState({
    title: title !== null ? title : '',
    url: url !== null ? url : '',
    company_name: company_name !== null ? company_name : '',
    job_type: job_type !== null ? job_type : 'remote',
    publication_date:
      publication_date !== null ? publication_date : new Date().toDateString(),
    candidate_required_location:
      candidate_required_location !== null ? candidate_required_location : '',
    salary: salary !== null ? salary : '',
    description: description !== null ? parseHtml(description) : '',
    progress: 'Application started',
    priority: 'High',
  });

  const handleFormStateChange = (e) => {
    console.log('target', e.target);
    console.log(formState[e.target.id]);
    const newState = { ...formState, [e.target.name]: e.target.value };
    setFormState(newState);
  };

  function CreateCard() {
    const userId = localStorage.getItem('userId');
    const applicationUrl = `/api/applications/${userId}`;
    fetch(applicationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log('success!');
        navigate('/dashboard');
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar
        position='absolute'
        color='default'
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      > */}
      {/* <Toolbar>
          <Typography variant='h6' color='inherit' noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        <Paper
          variant='outlined'
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component='h1' variant='h4' align='center'>
            Create new application
          </Typography>

          <React.Fragment>
            <React.Fragment>
              <>
                <Typography variant='h6' gutterBottom sx={{ mt: 5 }}>
                  Job Details
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id='company_name'
                      name='company_name'
                      label='Company Name'
                      fullWidth
                      autoComplete='given-name'
                      variant='standard'
                      value={formState['company_name']}
                      onChange={(e) => handleFormStateChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id='title'
                      name='title'
                      label='Job Title'
                      fullWidth
                      autoComplete='given-name'
                      variant='standard'
                      value={formState['title']}
                      onChange={(e) => handleFormStateChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id='job_type'
                      name='job_type'
                      select
                      label='Select Job type'
                      //   value={jobType}
                      //   onChange={handleJobTypeChange}
                      value={formState['job_type']}
                      onChange={(e) => handleFormStateChange(e)}
                      helperText='Please select a job type'
                      variant='standard'
                      fullWidth
                    >
                      {jobTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      id='publication_date'
                      name='publication_date'
                      label='Job Posting Date'
                      fullWidth
                      autoComplete='given-name'
                      variant='standard'
                      value={formState['publication_date']}
                      onChange={(e) => handleFormStateChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='location'
                      name='location'
                      label='Location'
                      fullWidth
                      autoComplete='location'
                      variant='standard'
                      value={formState['location']}
                      onChange={(e) => handleFormStateChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='salary'
                      name='salary'
                      label='Salary'
                      fullWidth
                      autoComplete='given-name'
                      variant='standard'
                      value={formState['salary']}
                      onChange={(e) => handleFormStateChange(e)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id='description'
                      label='Job Description'
                      name='description'
                      multiline
                      rows={7}
                      fullWidth
                      variant='standard'
                      value={formState['description']}
                      onChange={(e) => handleFormStateChange(e)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      id='progress'
                      name='progress'
                      label='Where in the pipeline are you with this posting?'
                      select
                      fullWidth
                      autoComplete='given-name'
                      //   value={progressType}
                      //   onChange={handleProgressTypeChange}
                      value={formState['progress']}
                      onChange={(e) => handleFormStateChange(e)}
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
                    <TextField
                      required
                      id='priority'
                      name='priority'
                      label='Set your priority for this job'
                      select
                      fullWidth
                      autoComplete='given-name'
                      //   value={priorityType}
                      //   onChange={handlePriorityChange}
                      value={formState['priority']}
                      onChange={(e) => handleFormStateChange(e)}
                      variant='standard'
                    >
                      {priorityTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      id='url'
                      name='url'
                      label='Source (url)'
                      fullWidth
                      autoComplete='given-name'
                      variant='standard'
                      value={formState['url']}
                      onChange={(e) => handleFormStateChange(e)}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Button variant='contained' onClick={CreateCard}>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </>
            </React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
