import React, { useState, useEffect } from 'react';
import CardApplication from './CardApplication';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Input, TextField } from '@mui/material';
import '../styles.scss';

function AddApplication() {
  const navigate = useNavigate();

  //   const [applications, setApplications] = useState({});
  const [Url, setUrl] = useState('');
  const [Company, setCompany] = useState('');
  const [Title, setTitle] = useState('');
  const List = [];

  function CreateCard() {
    console.log(Title, Url, Company);
    const userId = localStorage.getItem('userId');
    console.log(userId);
    const applicationUrl = `/api/applications/${userId}`;
    fetch(applicationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: Title,
        url: Url,
        company_name: Company,
        progress: 'Application started',
        priority: 'High',
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        // setApplications(res);
        navigate('/dashboard');
      });
  }

  return (
    <Container maxWidth='md'>
      {/* <div className='application'> */}
      <h1>New Application</h1>
      <TextField
        sx={{ mr: 3 }}
        margin='normal'
        size='small'
        variant='filled'
        label='Company name'
        id='companyName'
        type='text'
        onChange={(e) => setCompany(e.target.value)}
      />
      <br></br>
      <TextField
        sx={{ mr: 3 }}
        margin='normal'
        size='small'
        variant='filled'
        label='Job title'
        id='title'
        type='text'
        onChange={(e) => setTitle(e.target.value)}
      />
      <br></br>{' '}
      <TextField
        sx={{ mr: 3 }}
        margin='normal'
        size='small'
        variant='filled'
        label='Job'
        id='Job'
        type='text'
        onChange={(e) => setUrl(e.target.value)}
      />
      <br></br>
      <button onClick={() => CreateCard()}> Submit </button>
      {List}
      {/* </div> */}
    </Container>
  );
}

export default AddApplication;
