import * as React from 'react';

import CardComp from '../HomePageCards/CardComp';
import admissionrequest from '../images/admissionrequest.png'
import transferrequest from '../images/transferrequest.jpg'
import availablewards from '../images/availablewards.jpg'
import dischargepatient from '../images/dischargepatient.jpg'
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import Navbar from '../NavBar/Navbar';
import discharges from '../images/discharges.jpg';
import checkout from '../images/checkout.png';
import HospitalHP from '../images/HospitalHP.jpg';


export default function HospitalAdminHome() {
  const role = sessionStorage.getItem('setRole');
  return (
    <React.Fragment>
          <Navbar homepage='HospitalAdminHome' pageName='HOSPITAL ADMIN'></Navbar>
          <div
      style={{
        backgroundImage: `url(${HospitalHP})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center center', // Adjust as needed
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 5, md: 6 }}
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}>
                  <Grid item xs={'12'} lg={'12'}></Grid>
                  <Grid item xs={'12'} lg={'12'}></Grid>
                  <Grid item xs={'12'} lg={'12'}></Grid>
                  <Grid item xs={'2.4'} lg={'2.4'}></Grid>
                <Grid item xs={'2.4'} lg={'2.4'}>
                  <CardComp title="Amission-requests" cardName="Amission Requests" image={admissionrequest} hrf='/admissionrequests'></CardComp>
                </Grid>
                <Grid item xs={'2.4'} lg={'2.4'}>
                  <CardComp title="Ward-transfer-requests" cardName="Transfer Requests" image={transferrequest} hrf='/wardtransfers'></CardComp>
                </Grid>
                <Grid item xs={'2.4'} lg={'2.4'}>
                  <CardComp title="Available-wards" cardName="View Available Wards" image={availablewards} hrf='/availablewards'></CardComp>
                </Grid>
                <Grid item xs={'2.4'} lg={'2.4'}></Grid>
                <Grid item xs={'12'} lg={'12'}></Grid>
                <Grid item xs={'12'} lg={'12'}></Grid>
                <Grid item xs={'12'} lg={'12'}></Grid>
                <Grid item xs={'2.4'} lg={'2.4'}>
                  <CardComp title="Discharge-patient" cardName="Checkout Patient" image={checkout} hrf='/dischargepatient'></CardComp>
                </Grid>
                <Grid item xs={'2.4'} lg={'2.4'}>
              <CardComp title="Patient-discharges" cardName="Patient Discharges"  image={discharges}  hrf='/discharges'></CardComp>
              </Grid>
              <Grid item xs={'2.4'} lg={'2.4'}>
              <CardComp title="Discharge-patient" cardName="Non Insurance Discharge"  image={dischargepatient} hrf='/noninsurancedischarge' padd='3'></CardComp>
              </Grid>
              </Grid>
            </Box>
          </div>
        </React.Fragment>
  );
  // (<div>
  //   {(() => {
  //     if (role === 'HOSPITAL ADMIN') {
  //       //write rendering components
  //       return(
  //       <React.Fragment>
  //         <Navbar></Navbar>
  //         <div>
  //           <Box sx={{ width: '100%' }}>
  //             <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 5, md: 6 }}
  //               alignItems="center"
  //               justifyContent="center"
  //               sx={{ minHeight: '100vh' }}>
  //               <Grid item xs={'auto'} lg={'auto'}>
  //                 <CardComp title="Amission-requests" cardName="Amission Requests" image={admissionrequest} hrf='/'></CardComp>
  //               </Grid>
  //               <Grid item xs={'auto'} lg={'auto'}>
  //                 <CardComp title="Ward-transfer-requests" cardName="Transfer Requests" image={transferrequest} hrf='/'></CardComp>
  //               </Grid>
  //               <Grid item xs={'auto'} lg={'auto'}>
  //                 <CardComp title="Available-wards" cardName="Available Wards" image={availablewards} hrf='/'></CardComp>
  //               </Grid>
  //               <Grid item xs={'auto'} lg={'auto'}>
  //                 <CardComp title="Discharge-patient" cardName="Discharge Patient" image={dischargepatient} hrf='/'></CardComp>
  //               </Grid>
  //             </Grid>
  //           </Box>
  //         </div>
  //       </React.Fragment>)
  //     }
  //     else {
  //       return(
  //       <Typography component="h1" variant="h5" mt={3}>
  //       Login using HospitalAdmin details
  //   </Typography>
  //       )
  //      }
  //     }
  //    )
  //    ()
  //   }
  //   </div>)
}