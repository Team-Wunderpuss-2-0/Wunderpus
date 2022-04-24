import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { TextField, Container, Box, Button } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';

function Signup(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signupUser = () => {
    console.log(username, password);
    Axios.post('/api/auth/signup', {
      username,
      password,
    }).then((data) => {
      localStorage.setItem('userId', data.data);
      navigate('/dashboard');
    });
  };

  return (
    <Container maxWidth='sm'>
      <h1 id='Signup'> Signup</h1>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <TextField
          size='small'
          className='signin'
          type='text'
          placeholder='Username'
          margin='dense'
          sx={{ mr: 5 }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{' '}
        <br></br>
        <TextField
          size='small'
          margin='dense'
          className='signin'
          type='password'
          // type = 'hidden'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Box>
      <br></br>
      <Button onClick={signupUser} variant='contained'>
        Sign up
      </Button>
    </Container>
  );
}

export default Signup;
