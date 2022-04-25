import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Paper, Box, Grid, Container, Avatar } from '@mui/material';

function JobDashboard() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('/api/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <Container maxWidth='md' sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        {jobs.length !== 0 &&
          jobs.map((job) => {
            return (
              <Grid item xs={6} key={job.id}>
                <div className='job-card'>
                  <Paper elevation={5}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        p: 2,
                      }}
                    >
                      <Avatar src={job.company_logo} />
                      <br></br>
                      {job.title}
                      <br></br>
                      {job.company_name}
                      <br></br>
                      <br></br>
                      {new Date(job.publication_date).toDateString()}
                      <br></br>
                      {job.category}
                      <br></br>
                      {job.job_type === 'full_time'
                        ? 'Full Time'
                        : job.job_type === 'part_time'
                        ? 'Part Time'
                        : job.job_type === 'contract'
                        ? 'Contract'
                        : 'Null'}
                      <br></br>
                      <Link
                        to='/applications'
                        state={{ ...job }}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button variant='outlined'>Start application</Button>
                      </Link>
                    </Box>
                  </Paper>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}

export default JobDashboard;
