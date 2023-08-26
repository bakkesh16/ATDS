import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Navbar from '../NavBar/nonHomeNav';
import { MaterialReactTable } from "material-react-table";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NonInsuranceDischarge() {

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
                header: 'MOBILE NO',
            },
            {
                accessorKey: 'address',
                header: 'ADDRESS',
            },
            {
                accessorKey: 'wardnumber',
                header: 'WARD NO',
            },
            {
                accessorKey: 'dischargedate',
                header: 'DISCHARGE DATE',
            },
            {
                accessorKey: 'billamount',
                header: 'BILL AMOUNT',
            },
            {
                accessorKey: 'status',
                header: 'STATUS',
            },
        ],
        [], //end
    );

    const [rows, setRows] = useState([]);
    const [rowSelection, setRowSelection] = useState({});
    const selectedKeys = [];
    // const sortedRows = rows.filter(row => row.status === 'REQUESTED');
    const navigate = useNavigate();


    const selectedList = () => {
        for (const key in rowSelection) {
            if (rowSelection.hasOwnProperty(key)) {
                selectedKeys.push(key);
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:9090/cashDischarge');
    
            if (response.status === 200) {
              setRows(response.data);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);





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

    const changeStatusToRejected = () => {
        selectedKeys.forEach(key => {
            setRows(prevRows => {
                return prevRows.map(row => {
                    if (row.patientid === key) {
                        return {
                            ...row,
                            status: 'REJECTED'
                        };
                    }
                    return row;
                });
            });
        });
    }

    const handleApprove = (e) => {
        if (Object.keys(rowSelection).length > 0) {
            console.log('hello');
            // setSortedRows(rows);
            selectedList();
            // changeStatusToAccept();
            console.log("selected keys");
            console.log(selectedKeys);

            axios.post('http://localhost:9090/approvepatientdischarges', selectedKeys)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

            alert('Discharged without insurance claim');
            navigate('/HospitalAdminHome');
        }
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
                <Grid container spacing={2}  >
                    <Grid item xs={12} >
                        <div style={{ height: 'auto', width: '100%', border: 'solid 1px ' }}>

                            <MaterialReactTable
                                columns={columns}
                                data={rows}
                                enableRowSelection
                                getRowId={(row) => row.patientid} //give each row a more useful id
                                onRowSelectionChange={setRowSelection}
                                state={{ rowSelection }}
                            />
                        </div >
                    </Grid>
                    <Grid item xs={6} sm={5} ></Grid>
                    <Grid item xs={6} sm={5} >
                        <Button
                            onClick={handleApprove}
                            disabled={Object.keys(rowSelection).length > 0 ? false : true}
                            variant="contained"
                            sx={{ mt: 3, mb: 2, ml: 4, backgroundColor: 'seagreen', boxShadow: 3 }}
                        >
                            DISCHARGE
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}