import React, { useEffect, useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Box } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import axios from "axios";


export default function AdmissionRequestsById() {

    const columns = useMemo(

        () => [
            {
                accessorKey: 'patientid',
                header: 'PATIENT ID',
            },
            {
                accessorKey: 'insuranceid',
                header: 'INSURANCE ID',
            },
            {
                accessorKey: 'name',
                header: 'NAME',
            },
            {
                accessorKey: 'age',
                header: 'AGE',
            },
            {
                accessorKey: 'gender',
                header: 'GENDER',
            },
            {
                accessorKey: 'admissiondate',
                header: 'ADMISSION DATE',
            },
            {
                accessorKey: 'mobilenumber',
                header: 'MONILE NO',
            },
            {
                accessorKey: 'address',
                header: 'ADDRESS',
            },
            {
                accessorKey: 'wardnumber',
                header: 'ROOM NO',
            },
            {
                accessorKey: 'status',
                header: 'STATUS',
            },
        ],
        [], //end
    );

    const [rows, setRows] = useState([]);


    const patientId = sessionStorage.getItem('currentpatientid');

    const sortedRows = rows.filter(row => row.patientid === patientId);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:9094/findallrequests/${patientId}`);

            if (response.status === 200) {
                setRows(response.data);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <React.Fragment>
            {/* <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell>Insurance ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Admission Date</TableCell>
            <TableCell>Mobile No</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Room No</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.patientid}>
              <TableCell>{row.patientid}</TableCell>
              <TableCell>{row.insuranceid}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.admissiondate}</TableCell>
              <TableCell>{row.mobileno}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.roomno}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}

<Box
        sx={{

          marginTop: 8,
          alignItems: 'center',
          boxShadow: 7,
          p: 6
        }}
      >
            <Grid item xs={12} >
                <div style={{ height: 300, width: '100%', border: 'solid 1px ' }}>

                    <MaterialReactTable
                        columns={columns}
                        data={rows}
                    //   enableRowSelection
                    //   getRowId={(row) => row.id} //give each row a more useful id

                    />
                </div >
            </Grid>

            </Box>
        </React.Fragment>
    )

}