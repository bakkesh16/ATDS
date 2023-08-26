import Navbar from '../NavBar/nonHomeNav';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Box, Container, Typography } from "@mui/material";
import SelectLabels from "../selectlabels";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SaveAs } from '@mui/icons-material';
import axios from 'axios';

function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }

    return btoa(binary);
}

export default function CheckoutPatient() {
    const [wardNumber, setWardNumber] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [admissionDate, setAdmissionDate] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [patientId, setPatientid] = useState('');
    const [insuranceId, setInsuranceId] = useState('');
    const status = 'CHECKOUT';
    const navigate = useNavigate();
    const [imageBytes, setImageBytes] = React.useState(null);
    const [billAmount, setBillAmount] = useState('');
    const [imageField, setImageField] = React.useState('');
    const [dischargeDate, setDischargeDate] = useState('');
    const reader = new FileReader();
    const formData = new FormData(); // Create a FormData object
    const [fileBytes, setFileBytes] = useState(null);
    const finalDischargeDetails = {
        patientid: '',
        insuranceid: '',
        name: '',
        age: '',
        gender: '',
        admissiondate: '',
        mobilenumber: '',
        address: '',
        wardnumber: '',
        status: '',
        dischargedate: '',
        billamount: '',
        billimage: '',
    }


    const [det, setDet] = useState({});


    const handleimageField = (event) => {
        const selectedImage = event.target.files[0];

        if (selectedImage) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const imageBytes = new Uint8Array(e.target.result);
                // setImageBytes(imageBytes);

                const base64Image = arrayBufferToBase64(imageBytes);
                setImageBytes(base64Image);
            console.log("Base64 encoded image:", base64Image);
            };

            reader.readAsArrayBuffer(selectedImage);
        }
    };



    const onSearch = async (e) => {


        //axios code to store in detailsList
        try {
            // Make a GET request to retrieve the array of strings
            const response = await axios.get('http://localhost:9090/getadmissiondetails/' + patientId);

            // Update the state if the request is successful
            if (response.status === 200) {
                setDet(response.data);
            }
        } catch (error) {
            console.error('Error fetching array of strings:', error);
            // Handle the error if needed
        }

    }


    //to avoid the booking and discharge on previous dates
    let currentDate = new Date().toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).split('/').reverse().join('-');



    const handleDischargeSubmit = async (event) => {
console.log("inside");
        finalDischargeDetails.patientid = patientId;
        finalDischargeDetails.insuranceid = det.insuranceid;
        finalDischargeDetails.name = det.name;
        finalDischargeDetails.age = det.age;
        finalDischargeDetails.gender = det.gender;
        finalDischargeDetails.admissiondate = det.admissiondate;
        finalDischargeDetails.mobilenumber = det.mobilenumber;
        finalDischargeDetails.address = det.address;
        finalDischargeDetails.wardnumber = det.wardnumber;
        finalDischargeDetails.status = 'CHECKOUT';
        finalDischargeDetails.dischargedate = dischargeDate;
        finalDischargeDetails.billamount = billAmount;
        if (imageBytes) {
            finalDischargeDetails.billimage = imageBytes;
        }
        
        //axios
      console.log(finalDischargeDetails);
      
      axios.post('http://localhost:9090/checkoutPatient', finalDischargeDetails)
  .then(response => {
    console.log(response.data);
    alert("Patient discharged");
  })
  .catch(error => {
    console.error(error);
  });
    
  navigate('/HospitalAdminHome');


    }

    return (
        <React.Fragment>
            <Navbar homepage='HospitalAdminHome'></Navbar>
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
                        CHECKOUT PATIENT
                    </Typography>
                    <Box component="form" sx={{ m: 3, }}>
                        <Grid container spacing={2} alignItems={'center'} >
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    name="patientid"
                                    required
                                    fullWidth
                                    id="patientid"
                                    label="Patient ID"
                                    autoFocus
                                    onChange={e => { setPatientid(e.target.value) }}
                                //   onChange={onChange}
                                //   value={firstName}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Button
                                    type="button"
                                    variant="contained"
                                    onClick={onSearch}
                                    sx={{ backgroundColor: 'darkcyan', color: 'white', marginLeft: '10px', height: '56px' }}>SEARCH</Button>
                            </Grid>
                            <Grid item xs={12} sm={9}>

                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    name="fullname"
                                    required
                                    fullWidth
                                    id="fullname"
                                    label="Full Name"
                                    autoFocus
                                    value={det.name}
                                    inputProps={{
                                        readOnly: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: !!det.name, // Shrink the label if the field has a value
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    name="age"
                                    required
                                    fullWidth
                                    id="age"
                                    label="Age"
                                    autoFocus
                                    value={det.age}
                                    inputProps={{
                                        readOnly: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: !!det.name, // Shrink the label if the field has a value
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    name="gender"
                                    required
                                    fullWidth
                                    id="gender"
                                    label="Gender"
                                    autoFocus
                                    value={det.gender}
                                    inputProps={{
                                        readOnly: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: !!det.name, // Shrink the label if the field has a value
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    name="admissionDate"
                                    required
                                    fullWidth
                                    id="admissionDate"
                                    label="Admission Date"
                                    autoFocus
                                    value={det.admissiondate}
                                    inputProps={{
                                        readOnly: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: !!det.name, // Shrink the label if the field has a value
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    name="mobileNo"
                                    required
                                    fullWidth
                                    id="mobileNo"
                                    label="Mobile Number"
                                    autoFocus
                                    value={det.mobilenumber}
                                    inputProps={{
                                        readOnly: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: !!det.name, // Shrink the label if the field has a value
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    name="address"
                                    required
                                    fullWidth
                                    id="address"
                                    label="Address"
                                    autoFocus
                                    value={det.address}
                                    inputProps={{
                                        readOnly: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: !!det.name, // Shrink the label if the field has a value
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Discharge Date"
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    className="textField"
                                    inputProps={{ min: currentDate }}
                                    onChange={e => { setDischargeDate(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    fullWidth
                                    name="imageField"
                                    helperText="Bill Image"
                                    type='file'
                                    accept=".png,.jpeg,.jpg"
                                    value={imageField.name} // Show the selected file's name
                                    onChange={handleimageField}
                                    inputProps={{ accept: '.png,.jpeg,.jpg' }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    name="billAmount"
                                    required
                                    fullWidth
                                    id="billAmount"
                                    label="Bill Amount"
                                    autoFocus
                                    onChange={e => { setBillAmount(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={4} sm={4} ></Grid>
                            <Grid item xs={4} sm={4} ></Grid>
                            <Grid item xs={6} sm={6} >
                                <Button
                                    type="button"
                                    variant="contained"
                                    onClick={handleDischargeSubmit}
                                    sx={{ backgroundColor: 'red', color: 'white', marginLeft: '10px', height: '56px' }}>CHECKOUT</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}
