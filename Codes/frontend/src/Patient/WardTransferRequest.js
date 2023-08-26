import Navbar from "../NavBar/nonHomeNav";
import  React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box, Container, Typography } from "@mui/material";
import SelectLabels from "../selectlabels";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function  RequestWardTransfer() {
    const [selectedType, setSelectedType] = useState('');
    const [selectedWardNumber,setSelectedWardNumber] = useState('');
    const [wardTypes, setWardTypes] = useState([]);
    

    useEffect(() => {
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


    const [roomNumbers, setRoomNumbers] = useState([
        { type: 'Deulex', roomNumber: 110 },
        { type: 'Deulex', roomNumber: 210 },
        { type: 'Premium', roomNumber: 111 },
        { type: 'Premium', roomNumber: 211 },
    ]);

    const[wardNumbers,setWardNumbers] = useState([]);
    const patientid = sessionStorage.getItem('currentpatientid');
    const navigate = useNavigate();


    const updateWardNumbers = async (e) => {
        e.preventDefault();
        // const filteredRoomNumbers = roomNumbers.filter(
        //   (number) => number.type === selectedType
        // );
        // const wardNumbersArray = filteredRoomNumbers.map((number) => number.roomNumber);
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


        // setWardNumbers(wardNumbersArray);
      };
     
    var handleRequestSubmit = async (e) =>{
        e.preventDefault();
const transferRequest={
    patientid:patientid,
    requestedwardnumber:selectedWardNumber,
    status:'REQUESTED'
}

try {
    console.log(transferRequest);
    // Make a POST request to your server, passing the array as the request body
    const response = await axios.post('http://localhost:9095/addtransferrequest', transferRequest);
    console.log(response.data);
    // Update the state if the request is successful
    if (response.status === 200) {
      console.log('Transfer requested.');
      // Update the state or perform any other actions if needed
      alert("Requested to change to "+selectedType+" ward and room no "+selectedWardNumber+" for patient "+patientid);
        navigate("/PatientHome");
    }
  } catch (error) {
    console.error('Error storing array of strings:', error);
    // Handle the error if needed
  }

        
    }



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
                        REQUEST WARD TRANSFER
                    </Typography>
                    <Box component="form" sx={{ m: 3, }}>
                        <Grid container spacing={2} >
                            <Grid item xs={10} sm={6}>
                                <SelectLabels 
                                label="Ward Type" 
                                lists={wardTypes} 
                                wid={370} 
                                onChange={e => { setSelectedType(e.target.value) }} />
                            </Grid>
                            <Grid item xs={2} sm={9}>
                            <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={updateWardNumbers}
                                    sx={{ backgroundColor: 'greenyellow', color: 'black', marginLeft: '10px', height: '56px' }}>
                                    CHECK
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <SelectLabels label="Ward Number" lists={wardNumbers} wid={370} onChange={e => { setSelectedWardNumber(e.target.value) }} />
                            </Grid>
                            <Grid item xs={4} sm={4} ></Grid>
                            <Grid item xs={6} sm={6} >
                            <Button 
                            type="submit"
                            variant="contained" 
                            onClick={handleRequestSubmit}
                            sx={{ backgroundColor: 'greenyellow', color:'black', marginLeft: '10px', height: '56px' }}>Request Transfer</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            </div>
        </React.Fragment>
    );

}