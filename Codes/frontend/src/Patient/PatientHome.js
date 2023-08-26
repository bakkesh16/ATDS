import React, { useEffect, useState } from 'react';
import CardComp from '../HomePageCards/CardComp';
import bookward from '../images/Bookwards.jpg'
import viewrequests from '../images/viewrequests.png'
import transferward from '../images/transferward.png'
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import Navbar from '../NavBar/Navbar';
import axios from 'axios';
import patientHomeBG from '../images/PatientHomeBG.webp';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();
export default function PatientHome() {
  const role = sessionStorage.getItem('setRole');
  const [isAdmitted,setIsAdmitted] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9094/getAdmissionById/${sessionStorage.getItem('currentpatientId')}`);
       
        if (response.status === 200) {
          if (response.data) {
            const dataObj = response.data;
            console.log("hello inside if");
            setIsAdmitted((dataObj.status === 'ADMITTED'));
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
       <ThemeProvider theme={defaultTheme}>
            <Navbar homepage = 'PatientHome' pageName='PATIENT HOMEPAGE'></Navbar>
            <div
      style={{
        backgroundImage: `url(${patientHomeBG})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center center', // Adjust as needed
        // minHeight: '100vh',
        height:'600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
              <Box sx={{ width: '100%', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 5, md: 6 }}
                  alignItems="center"
                  justifyContent="center">
                  <Grid item xs={'auto'} lg={'auto'}>
                    <CardComp title="Book-ward" cardName="Book Ward" image={bookward} hrf='/bookward'></CardComp>
                  </Grid>
                  <Grid item xs={'auto'} lg={'auto'}>
                   {isAdmitted && (<CardComp title="Transfer-ward" cardName="Transfer Ward" image={transferward} hrf='/requestwardtransfer'></CardComp>)} 
                  </Grid>
                  <Grid item xs={'auto'} lg={'auto'}>
                    <CardComp title="View-Requests" cardName="View Requests" image={viewrequests} hrf='/viewrequests'></CardComp>
                  </Grid>
                </Grid>
              </Box>
            </div>
            </ThemeProvider>
          </React.Fragment>
  )
}