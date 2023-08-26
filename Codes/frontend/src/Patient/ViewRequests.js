import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../NavBar/nonHomeNav";
import SelectLabels from "../selectlabels";
import RequestWardTransfer from "./WardTransferRequest";
import AdmissionRequestsById from "./admissionRequests";
import RomeChangeRequests from "./RoomChangeRequests";

export default function ViewRequests() {

    const type = ['Admission', 'Ward Transfer'];
    const [selectedType, setSelectedType] = useState('');
    const [showAdmission, setShowAdmission] = useState(false);
    const [showTransfer, setShowTransfer] = useState(false);

    const handleClick = () => {
        if (selectedType === 'Admission') {
            setShowTransfer(false);
            setShowAdmission(true);
        }
        else if (selectedType === 'Ward Transfer') {
            setShowAdmission(false);
            setShowTransfer(true);
        }
        else {
            setShowAdmission(false);
            setShowTransfer(false);
        }
    }
    return (
        <React.Fragment>
            <Navbar homepage='PatientHome'></Navbar>
            <Container component="main" maxWidth="md">
                <Box
                    // boxShadow={'5px 5px 10px grey'}
                    sx={{
                        margin: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* <Box component="form" sx={{ m: 3 }}> */}
                        <Grid container spacing={2}  >
                            <Grid item xs={3} sm={3}></Grid>
                            <Grid item xs={6} sm={6}>
                                <SelectLabels label="REQUEST TYPE" lists={type} wid={370} onChange={e => { setSelectedType(e.target.value)}} />
                            </Grid>
                            <Grid item xs={5} sm={5}></Grid>
                            <Grid item xs={2} sm={5}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={handleClick}
                                    sx={{ backgroundColor: 'greenyellow', color: 'black', marginLeft: '10px', height: '56px' }}>
                                    SEARCH
                                </Button>
                            </Grid>
                            </Grid>
                            </Box>

                            <Grid item xs={2} sm={2}></Grid>
                            <Grid item xs={2} sm={9}>
                               
                            </Grid>
                       
                    
                {/* </Box> */}
                </Container>
                {showAdmission && (
                                    <AdmissionRequestsById></AdmissionRequestsById>
                                )}
                                {showTransfer && (
                                    <RomeChangeRequests></RomeChangeRequests>
                                )}

           
        </React.Fragment>

    );
}
