import Navbar from "../NavBar/nonHomeNav";
import { MaterialReactTable } from "material-react-table";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Discharges(){
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
            {
                accessorKey: 'dischargedate',
                header: 'DISCHARGE DATE',
            },
            {
                accessorKey: 'billamount',
                header: 'BILL AMOUNT',
            },
        ],
        [], //end
    );

    const [rows, setRows] = useState([]);
    const [rowSelection, setRowSelection] = useState({});
    const selectedKeys = [];
    const sortedRows = rows.filter(row => row.status === 'DISCHARGED');
    const navigate = useNavigate();
    const role = sessionStorage.getItem('setRole');
    const hp = role === 'HOSPITAL ADMIN' ? 'HospitalAdminHome' : 'InsuranceAdminHome' ;
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:9090/alldischargedetails');
    
            if (response.status === 200) {
                setRows(response.data);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

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
            changeStatusToAccept();
            console.log(selectedKeys);
            alert('Approved the selected offences');
            navigate('/HospitalAdminHome');
        }
    }

    const handleReject = (e) => {
        if (Object.keys(rowSelection).length > 0) {
            console.log('hello');
            // setSortedRows(rows);
            selectedList();
            changeStatusToRejected();
            console.log(selectedKeys);
            alert('Rejected the selected offences');
            navigate('/HospitalAdminHome');
        }
    }

    return (
        <React.Fragment>
            <Navbar homepage= {hp} ></Navbar>
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
                                data={sortedRows}
                                // enableRowSelection
                                // getRowId={(row) => row.patientid} //give each row a more useful id
                                // onRowSelectionChange={setRowSelection}
                                // state={{ rowSelection }}
                            />
                        </div >
                    </Grid>
                    <Grid item xs={6} sm={5} ></Grid>
                    <Grid item xs={6} sm={5} >
                        {/* <Button
                            onClick={handleApprove}
                            disabled={Object.keys(rowSelection).length > 0 ? false : true}
                            variant="contained"
                            sx={{ mt: 3, mb: 2, ml: 4, backgroundColor: 'seagreen', boxShadow: 3 }}
                        >
                            APPROVE
                        </Button>
                        <Button
                            onClick={handleReject}
                            disabled={Object.keys(rowSelection).length > 0 ? false : true}
                            variant="contained"
                            sx={{ mt: 3, mb: 2, ml: 4, backgroundColor: 'red', boxShadow: 3 }}
                        >
                            REJECT
                        </Button> */}
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}
