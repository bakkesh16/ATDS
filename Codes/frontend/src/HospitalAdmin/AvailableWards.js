import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Navbar from '../NavBar/nonHomeNav';
import { useNavigate } from "react-router-dom";
import { MaterialReactTable } from "material-react-table";
import axios from "axios";

export default function AvailableWards(){
    const columns = useMemo(

        () => [
            {
                accessorKey: 'wardnumber',
                header: 'WARD NUMBER',
            },
            {
                accessorKey: 'wardtype',
                header: 'WARD TYPE',
            },
            
        ],
        [], //end
    );

    const [rows, setRows] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:9093/getvacantwards');
    
            if (response.status === 200) {
                setRows(response.data);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);



    const [rowSelection, setRowSelection] = useState({});
    const selectedKeys = [];
    const sortedRows = rows.filter(row => row.status === 'REQUESTED');
    const navigate = useNavigate();


    const selectedList = () => {
        for (const key in rowSelection) {
            if (rowSelection.hasOwnProperty(key)) {
                selectedKeys.push(key);
            }
        }
    }

    const changeStatusToAccept = () => {
        selectedKeys.forEach(key => {
            setRows(prevRows => {
                return prevRows.map(row => {
                    if (row.patientid === key) {
                        return {
                            ...row,
                            status: 'APPROVED'
                        };
                    }
                    return row;
                });
            });
        });
    }

    return (
        <React.Fragment>
            <Navbar homepage='HospitalAdminHome'></Navbar>
            <Box
                sx={{

                    marginTop: 8,
                    alignItems: 'center',
                    boxShadow: 7,
                    p: 6
                }}
            >
                <Grid container spacing={2} alignItems="center" justifyContent="center" >
                    <Grid item xs={'auto'} >
                        <div style={{ height: 'auto', width:900, border: 'solid 1px ' }}>

                            <MaterialReactTable
                                columns={columns}
                                data={rows}
                                // enableRowSelection
                                // getRowId={(row) => row.patientid} //give each row a more useful id
                                // onRowSelectionChange={setRowSelection}
                                // state={{ rowSelection }}
                            />
                        </div >
                    </Grid>
                    <Grid item xs={6} sm={5} ></Grid>
                    <Grid item xs={6} sm={5} >
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}
