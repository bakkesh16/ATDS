
import Navbar from "../NavBar/nonHomeNav";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Box, Container, Typography } from "@mui/material";
import SelectLabels from "../selectlabels";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function Bookward() {
    const [selectedType, setSelectedType] = useState('');
    const [selectedWardNumber,setSelectedWardNumber] = useState('');
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [selectedGender,setSelectedGender] = useState('');
    const [admissionDate,setAdmissionDate] = useState('');
    const [mobileNumber,setMobileNumber] = useState('');
    const [address,setAddress] = useState('');
    const patientid = sessionStorage.getItem('currentpatientid');
    const insuranceId = sessionStorage.getItem('currentInsuranceId'); 
    const status = 'REQUESTED';
    const navigate = useNavigate();

    
    const [wardTypes, setWardTypes] = useState([]);
    
    const[wardNumbers,setWardNumbers] = useState([]);
    const [genderList, setGenderList] = useState(['Male', 'Female']);


    React.useEffect(() => {
        const fetchWardTypes = async () => {
          try {
            // Make a GET request to retrieve the array of strings
            console.log("entering useEffect");
            const response = await axios.get('http://localhost:9093/getvacantwardtypes');
            console.log(response.data);
            // Update the state if the request is successful
            if (response.status === 200) {
              setWardTypes(response.data);
            }
          } catch (error) {
            console.error('Error fetching array of strings:', error);
            // Handle the error if needed
          }
        };
      
        fetchWardTypes();
      }, []);

    // Function to update wardNumbers based on selectedType
  const updateWardNumbers = async (e) => {
    e.preventDefault();
    // const filteredRoomNumbers = roomNumbers.filter(
    //   (number) => number.type === selectedType
    // );
    // const wardNumbersArray = filteredRoomNumbers.map((number) => number.roomNumber);
    // setWardNumbers(wardNumbersArray);

    try {
        // Make a GET request to retrieve the array of strings
        const response = await axios.get(`http://localhost:9093/wardnumberson/${selectedType}`);
        console.log(response.data);
        // Update the state if the request is successful
        if (response.status === 200) {
            const wardNumbersArray = response.data;
            setWardNumbers(wardNumbersArray);
        }
      } catch (error) {
        console.error('Error fetching array of strings:', error);
        // Handle the error if needed
      }
  };
  
var handleRequestSubmit = async (e) =>{
    e.preventDefault();

    const admission = {
        patientid:patientid,
        insuranceid:insuranceId,
        name:name,
        age:age,
        gender:selectedGender,
        admissiondate:admissionDate,
        mobilenumber:mobileNumber,
        address:address,
        wardnumber:selectedWardNumber,
        status:status
    }

    try {
        const response = await axios.post('http://localhost:9094/requestnewadmission',admission);
        console.log(response.data); // Handle the response as needed
   alert("Successfully raised new admission request");
    } catch (error) {
        console.error(error);
      }

   
    // alert(patientid+"     "+selectedType+"   "+selectedWardNumber+"   "+name+"   "+age+"   "+selectedGender+"   "+admissionDate+"   "+mobileNumber+"   "+address);
    navigate("/PatientHome");
}


//to avoid the booking and discharge on previous dates
  let currentDate = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).split('/').reverse().join('-');


    return (
        <React.Fragment>
            <Navbar homepage = 'PatientHome'></Navbar>
            <div
    style={{
      
      backgroundColor:'#fef8dd',
      backgroundSize: 'cover', // Adjust as needed
      backgroundPosition: 'center center', // Adjust as needed
      // minHeight: '91vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
            <Container component="main" maxWidth="md" sx={{backgroundColor: '#fef8dd',}}>
                <Box
                    boxShadow={'5px 5px 10px grey'}
                    sx={{
                        margin: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                    }}
                >
                    <Typography component="h1" variant="h5" mt={3}>
                        BOOK AN WARD
                    </Typography>
                    <Box component="form" sx={{ m: 3, }}>
                        <Grid container spacing={2} >
                            <Grid item xs={10} sm={6}>
                                <SelectLabels label="Ward Type" lists={wardTypes} wid={370} onChange={e => {setSelectedType(e.target.value)}}  />
                            </Grid>
                            <Grid item xs={2} sm={9}>
                            {/* <button onClick={updateWardNumbers}>CHECK</button> */}
                            <Button 
                            type="button"
                            variant="contained" 
                            onClick={updateWardNumbers}
                            sx={{ backgroundColor: 'greenyellow', color:'black', marginLeft: '10px', height: '56px' }}>CHECK</Button>
                            
                            </Grid>
                            {/* </Grid>
                    </Box>

                            <Box component="form" sx={{ m: 3 }}>
                            <Grid container spacing={2}> */}
                            <Grid item xs={12} sm={9}>
                                <SelectLabels label="Ward Number" lists={wardNumbers} wid={370} onChange={e => {setSelectedWardNumber(e.target.value)}} />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    name="fullName"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="Full Name"
                                    autoFocus
                                    onChange={e => {setName(e.target.value)}}
                                //   onChange={onChange}
                                //   value={firstName}
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
                                    onChange={e => {setAge(e.target.value)}}
                                />
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <SelectLabels label="Gender" lists={genderList} wid={220} onChange={e => {setSelectedGender(e.target.value)}}/>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    label="Admission Date"
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    className="textField"
                                    inputProps={{ min: currentDate}}
                                    onChange={e => {setAdmissionDate(e.target.value)}}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    name="mobileNumber"
                                    required
                                    fullWidth
                                    id="mobileNumber"
                                    label="Mobile Number"
                                    autoFocus
                                    onChange={e => {setMobileNumber(e.target.value)}}
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
                                    onChange={e => {setAddress(e.target.value)}}
                                />
                            </Grid>
                            <Grid item xs={4} sm={4} ></Grid>
                            <Grid item xs={6} sm={6} >
                            <Button 
                            type="submit"
                            variant="contained" 
                            onClick={handleRequestSubmit}
                            sx={{ backgroundColor: 'greenyellow', color:'black', marginLeft: '10px', height: '56px' }}>Request Booking</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            </div>
        </React.Fragment>
    );
}


// var patientid = sessionStorage.getItem('currentpatientid');