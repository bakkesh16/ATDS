import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../NavBar/nonHomeNav";
import SelectLabels from "../selectlabels";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function VerifyInsurance() {

    const [insuranceid, setInsuranceid] = useState('');
    const [status, setStatus] = useState('');
    const statusList = ['VALID', 'INVALID'];

    const insuranceObject = { insuranceid: '', status: '' };
    const navigate = useNavigate();
    const handleSubmit = () => {


        insuranceObject.insuranceid = insuranceid;
        insuranceObject.status = status;

        axios.post('http://localhost:9092/add-modify', insuranceObject)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
        alert("Successfully added/updated insurance ");
       
       navigate('/InsuranceAdminHome');
    }


    return (
        <React.Fragment>
            <Navbar homepage='InsuranceAdminHome'></Navbar>
            <Container component="main" maxWidth="md">
                <Box
                    boxShadow={'5px 5px 10px grey'}
                    sx={{
                        margin: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5" mt={3}>
                        ADD / MODIFY VERIFIED INSURANCE
                    </Typography>
                    <Box component="form" sx={{ m: 3, paddingLeft: 25 }} >
                        <Grid container spacing={2} alignContent={'center'} >
                            <Grid item xs={'auto'} sm={7}>
                                <TextField
                                    name="insuranceid"
                                    required
                                    fullWidth
                                    id="insuranceid"
                                    label="Insurance ID"
                                    autoFocus
                                    onChange={e => { setInsuranceid(e.target.value) }}
                                //   onChange={onChange}
                                //   value={firstName}
                                />
                            </Grid>
                            <Grid item xs={2} sm={5}></Grid>
                            <Grid item xs={2} sm={1}></Grid>
                            <Grid item xs={2} sm={6}>
                                <SelectLabels label="Status" lists={statusList} wid={200} onChange={e => { setStatus(e.target.value) }} />
                            </Grid>
                            <Grid item xs={2} sm={5}></Grid>
                            <Grid item xs={2} sm={2.2}></Grid>
                            <Grid item xs={12} sm={5}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={handleSubmit}
                                    sx={{ backgroundColor: 'greenyellow', color: 'black', marginLeft: '10px', height: '56px' }}>UPDATE</Button>

                            </Grid>
                            <Grid item xs={4} sm={4} ></Grid>

                        </Grid>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}
