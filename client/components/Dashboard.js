import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardApplication from './CardApplication';
import { Paper, Button, Box } from '@mui/material';
// /applications/:userId
function Dashboard() {
  const [applications, setApplications] = useState([]);
  const getApplications = () => {
    fetch(`/api/applications/${localStorage.getItem('userId')}`)
      .then((data) => data.json())
      .then((res) => setApplications(res));
  };
  useEffect(() => {
    getApplications();
  }, []);
  const deleteApplication = (appId) => {
    fetch(`/api/application/${appId}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        getApplications();
      })
      .catch((err) => console.log(err));
  };

  const updateProgress = (appId, data) => {
    fetch(`/api/application/${appId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('data', response);
        getApplications();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Paper elevation={3}>
      <h1>Welcome to your dashboard!</h1>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to='/jobs' style={{ textDecoration: 'none' }}>
          <Button variant='text' sx={{ mr: 5 }}>
            View Job Postings
          </Button>
        </Link>
        <Link to='/applications' style={{ textDecoration: 'none' }}>
          <Button variant='outlined'>Start application</Button>
        </Link>
      </Box>

      {applications.length > 0 &&
        applications.map((app) => {
          return (
            <CardApplication
              {...app}
              key={app._id}
              deleteApp={deleteApplication}
              updateApp={updateProgress}
            />
          );
        })}
      {/* <button onClick={() => getApplications()}>Testing</button> */}
    </Paper>
  );
}

export default Dashboard;
