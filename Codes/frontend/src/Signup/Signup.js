import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import axios from "axios";
import Navbar from '../Login/Navbar';
import { useNavigate } from 'react-router-dom';


export default function Signup() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [insuranceId, setInsuranceId] = useState('');
  const [role,setRole] = useState('PATIENT');
  

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    

if(userName!==''&&password!==''&&insuranceId!==''){
  let signupForm = {
  userid:userName,
  password:password,
  role:role,
  insuranceid:insuranceId
  };
  console.log(signupForm);

  try {
    const response = await axios.post('http://localhost:9091/adduser',signupForm);
    console.log(response.data); // Handle the response as needed
  } catch (error) {
    console.error(error);
  }


    alert('SignUp successful continue to login');
    navigate('/');
}
else{
  alert("Please fill all the required details.");
}
  }



  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div>
        <Container component="form" maxWidth="md" >
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 7,
              p: 6
            }}
            
          >
            <Typography component="h1" variant="h5">
              SIGN UP
            </Typography>
            <Box sx={{ mt: 3, alignItems: 'center', }}>
              <Grid container spacing={2}>
                <Grid item xs={2} sm={2} ></Grid>
                <Grid item xs={8} sm={8} >
                  <TextField
                    name="mailid"
                    required
                    fullWidth
                    id="mailid"
                    label="User-Name (email)"
                    autoFocus
                    onChange={e => setUserName(e.target.value)}
                    sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)',}} // Add a background color with transparency
                  // value={offenceType}
                  />
                </Grid>
                <Grid item xs={2} sm={2} ></Grid>
                <Grid item xs={2} sm={2} ></Grid>
                <Grid item xs={8} sm={8} >
                  <TextField
                    name="password"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    autoFocus
                    onChange={e => setPassword(e.target.value)}
                  // value={offenceType}
                  />
                </Grid>
                <Grid item xs={2} sm={2} ></Grid>
                <Grid item xs={2} sm={2} ></Grid>
                <Grid item xs={8} sm={8} >
                  <TextField
                    name="insuranceid"
                    required
                    fullWidth
                    id="insuranceid"
                    label="Insurance ID"
                    autoFocus
                    onChange={e => setInsuranceId(e.target.value)}
                  // value={offenceType}
                  />
                </Grid>
                <Grid item xs={2} sm={2} ></Grid>
                <Grid item xs={4.5} sm={4.5} ></Grid>
                <Grid item xs={3} sm={3} >
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: 'greenyellow', color: 'black' }}
                    // onSubmit={handleSubmit}
                  onClick={handleSubmit}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </React.Fragment>
  );
}

