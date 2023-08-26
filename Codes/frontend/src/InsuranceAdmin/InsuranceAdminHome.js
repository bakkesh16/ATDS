import * as React from 'react';
import CardComp from '../HomePageCards/CardComp';
import discharges from '../images/discharges.jpg'
import verifyinsurance from '../images/verifyinsurance.jpg'
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import Navbar from '../NavBar/Navbar';
import approveclaim from '../images/approveclaim.jpg';
import homeBG from '../images/InsuranceHomeBG.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();


export default function InsuranceAdminHome(){
  
    const role = sessionStorage.getItem('setRole');
    return (
      <React.Fragment>
        <ThemeProvider theme={defaultTheme}>
            <Navbar homepage = 'InsuranceAdminHome'  pageName='INSURANCE ADMIN'></Navbar>
            <div
      style={{
        backgroundImage: `url(${homeBG})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center center', // Adjust as needed
        // minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
           <Box sx={{ width: '100%', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 5, md: 6 }} 
          alignItems="center"
          justifyContent="center"
         >
              <Grid item xs={'auto'} lg={'auto'}>
              <CardComp title="Patient-discharges" cardName="Patient Discharges"  image={discharges}  hrf='/discharges'></CardComp>
              </Grid>
              <Grid item xs={'auto'} lg={'auto'}>
              <CardComp title="Verify-insurance" cardName="Add/Modify Insurance"  image={verifyinsurance} hrf='/verifyinsurance' padd='3'></CardComp>
              </Grid>
              <Grid item xs={'auto'} lg={'auto'}>
              <CardComp title="Approve-Claim" cardName="Approve Claim"  image={approveclaim} hrf='/patientdischarge' padd='3'></CardComp>
              </Grid>
            </Grid>
          </Box>
            </div>
            </ThemeProvider>
            </React.Fragment>
    );
    // (<div>
    //  {(() => {
    //     if (role === 'INSURANCE ADMIN') {
    //       return (
    //         <React.Fragment>
    //         <Navbar></Navbar>
    //         <div>
    //         <Box sx={{ width: '100%' }}>
    //         <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 5, md: 6 }} 
    //       alignItems="center"
    //       justifyContent="center"
    //       sx={{ minHeight: '100vh' }}>
    //           <Grid item xs={'auto'} lg={'auto'}>
    //           <CardComp title="Patient-discharges" cardName="Patient Discharges"  image={discharges}  hrf='/'></CardComp>
    //           </Grid>
    //           <Grid item xs={'auto'} lg={'auto'}>
    //           <CardComp title="Verify-insurance" cardName="Verify Insurance"  image={verifyinsurance} hrf='/'></CardComp>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //         </div>
    //         </React.Fragment>
    //       )
    //     }
    //     else {
    //       return(
    //       <Typography component="h1" variant="h5" mt={3}>
    //       Login using InsuranceAdmin details
    //   </Typography>)
    //     }
    //   }
    //  )
    //  ()
    // }
    // </div>)
}