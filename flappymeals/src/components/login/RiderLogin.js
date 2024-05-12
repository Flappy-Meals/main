// Login.js

import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, Paper } from '@mui/material';
import Header from '../Header/header';
import Footer from '..//Footer/footer';
import 'animate.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RiderLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Email:', email);
    console.log('Password:', password);
    

    try {
      // Send a POST request to the login endpoint
      const response = await axios.post('http://localhost:5038/RiderLogin', { username: email, password });
      
      // If login is successful, log the rider details
      console.log('Login successful:', response.data);

      localStorage.setItem('rider', JSON.stringify(response.data.rider));
      setLoginStatus("success");

      navigate('/RiderDashboard');
      // Redirect rider to dashboard or perform any other action
  } catch (error) {
      // If login fails, log the error message
      console.error('Login failed:', error.response.data.message);
      setLoginStatus("failed");
  }
  };

  return (
    <div>
        <Header/>
    <Container className='animate__animated animate__slideInLeft' component="main" maxWidth="xs" sx={{marginBottom:{s:'10vh'}}} style={{ marginTop:"12vh",marginBottom:"10vh", display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" component="h2" gutterBottom  style={{ fontFamily: 'Josefin Sans', color:"#D91919" , fontWeight:900 , fontSize: { xs: '1rem', md: '1.2rem' } }}>
         Rider Login
        </Typography>
        <form style={{ width: '100%', marginTop: '8px' }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
           
            style={{ margin: '24px 0 16px',backgroundColor:"#D91919" , '&:hover':{backgroundColor :"black"} }}
          >
            <Link style={{textDecoration:"none",color:"white"}}>Sign In</Link>
          </Button>
        </form>
     
        <Button
        fullWidth
      component={Link}
      to="/login"
      style={{
        color: "#D91919",
        backgroundColor: "white",
        border: "3px solid #D91919",
        '&:hover': {
          backgroundColor: "black",
          color: "white",
          fontFamily:"Josefin Sans",
          fontWeight:900
          ,width:"100%"
        }
      }}
    >
      Customer Login
    </Button>    
      </Paper>
    </Container>
    {loginStatus === 'success' && ( // Conditionally render Alert for successful login
            <Alert sx={{width:"80%"}} severity="success">Login successful.</Alert>
          )}
    {loginStatus === 'failed' && ( // Conditionally render Alert for successful login
            <Alert sx={{width:"80%"}} severity="error">Login Failed.</Alert>
          )}  
    <Footer/>
    </div>
  );
};

export default RiderLogin;
