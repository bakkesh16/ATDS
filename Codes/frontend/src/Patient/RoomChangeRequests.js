import React, { useEffect, useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Box } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import axios from "axios";


export default function RomeChangeRequests() {

    const columns = useMemo(

        () => [
            {
                accessorKey: 'patientid',
                header: 'PATIENT ID',
            },
            {
                accessorKey: 'currentwardnumber',
                header: 'CURRENT ROOM',
            },
            {
                accessorKey: 'requestedwardnumber',
                header: 'REQUESTED ROOM',
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

    // const sortedRows = rows.filter(row => row.patientid === patientId);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:9095/findalltransferrequestbyid/${patientId}`);

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
                        />
                    </div >
                </Grid>

            </Box>
        </React.Fragment>
    )

}