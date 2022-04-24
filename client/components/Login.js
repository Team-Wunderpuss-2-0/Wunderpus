import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { TextField, Container, Box, Button } from '@mui/material';

function Login(props) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log(username, password);
    Axios.post('/api/auth/login', {
      username,
      password,
    })
      .then((data) => {
        localStorage.setItem('userId', data.data);
        navigate('/dashboard');
      })
      .catch((err) => setError(err));
  };

  return (
    <Container maxWidth='sm'>
      <h1 id='Login'> Login!</h1>
      {error !== null && error}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <TextField
          size='small'
          className='signin'
          type='text'
          placeholder='Username'
          sx={{ mr: 5 }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{' '}
        <br></br>
        <TextField
          size='small'
          className='signin'
          type='password'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{' '}
      </Box>
      <br></br>
      <Button onClick={login} variant='contained'>
        {' '}
        Log In
      </Button>
      <p>
        {' '}
        Forgot your <a href=''>password</a>?
      </p>
      <p>
        {' '}
        new user? sign up <a href='http://localhost:8080/signup'>here</a>
      </p>
    </Container>
  );
}

export default Login;
