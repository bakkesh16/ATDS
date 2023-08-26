import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginPageBG from '../images/loginPageBG.webp';
import loginBG from '../images/loginBG.jpg';


const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  // const [user, setUser] = useState({});
  const [users, setUsers] = useState([
    { userName: 'rahul@gmail.com', password: '123', role: 'PATIENT', insuranceid: 456789 },
    { userName: 'sachin@gmail.com', password: '123', role: 'PATIENT', insuranceid: 123456 },
    { userName: 'abd@gmail.com', password: '123', role: 'PATIENT', insuranceid: 789123 },
    { userName: 'admin@hospital.com', password: '123', role: 'HOSPITAL ADMIN' },
    { userName: 'admin@insurance.com', password: '123', role: 'INSURANCE ADMIN' },
  ]);

  const [insurances, setInsurances] = useState([
    { insuranceId: '456789', status: 'valid' },
    { insuranceId: '123456', status: 'invalid' }
  ]);
  //     const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const [patientId, setPatientId] = useState(''); // set the patient id when the login success. setpatientId=response.patientId

  const handleId = (e) => {
    e.preventDefault();
  }

  const handlePassword = (e) => {

  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(patientId + "    " + password);
    console.log(num);



    try {
      const user = await axios.get(`http://localhost:9091/getuser/${patientId}`);

      console.log('axios');
      console.log('user data' + user.data);

      if (user.data.role != null) {
        const roleName = user.data.role;
        console.log(roleName);
        console.log(user.data.password);
        console.log(password);

        if (user.data.password === password) {
          console.log('user found');
          sessionStorage.setItem('setRole', roleName);

          if (roleName === 'PATIENT') {

            try {
              const insurance = await axios.get(`http://localhost:9092/findinsurance/${user.data.insuranceid}`);
              console.log(insurance.data); // Handle the response as needed

              if (insurance != null) {
                if (insurance.data.status == 'VALID') {
                  sessionStorage.setItem('currentInsuranceId', user.data.insuranceid);
                  sessionStorage.setItem('currentpatientId', patientId);
                  navigate('/PatientHome');
                }
                else {
                  alert('insurance expired');
                }
              }
              else alert('no Insurance found');

            } catch (error) {
              console.error(error);
            }


          }

          else if (roleName === 'HOSPITAL ADMIN') {
            navigate('/HospitalAdminHome');
          }
          else if (roleName === 'INSURANCE ADMIN') {
            navigate('/InsuranceAdminHome');
          }

        }
        else {
          alert('invalid password');
        }
      }
      else {
        alert('no user found')
      }

    } catch (error) {
      console.error(error);
    }




  };

  sessionStorage.setItem('currentpatientid', patientId);

  var num = sessionStorage.getItem('currentpatientid');

  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <Navbar></Navbar>
        <Container component="main"
          maxWidth="auto"
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            height: 630,
            backgroundImage: `url(${loginPageBG})`, // Add the background image here
            backgroundSize: 'cover',
          }} // Adjust background size as needed 
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 2)', // Add a shadow
              width: 600,
              height: 430,
              backgroundColor: '#9288F8', // Add a background color with transparency
            }}
          >

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, alignSelf: 'center', paddingTop: 10, alignItems: 'center', }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="id"
                label="ID"
                name="id"
                autoComplete="id"
                onChange={e => setPatientId(e.target.value)}
                autoFocus
                sx={{ backgroundColor: 'white', }} // Add a background color with transparency
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={e => setpassword(e.target.value)}
                autoComplete="current-password"
                sx={{ backgroundColor: 'white' }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#3b0087', color: 'white' }}
                onSubmit={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2" sx={{ color: 'white', fontSize: '17px' }}>
                    {"Don't have an account? Sign Up"}
                  </Link>

                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

