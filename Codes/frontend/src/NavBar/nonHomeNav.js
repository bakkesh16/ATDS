import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import { useNavigate } from 'react-router-dom';
import hospitalLogo from '../images/hospitalLogo.png';
import { WidthFull } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import patientHomeBG from '../images/patientHomeBG.jpg';

const settings = ['Logout'];

function Navbar2(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const role = sessionStorage.getItem('setRole');
  const [isPatient,setIsPatient] = React.useState(role === 'PATIENT') ;
  const [chatButton,setChatButton] = React.useState((role === 'HOSPITAL ADMIN') || (role === 'INSURANCE ADMIN')) ;
  console.log("role : ",role);

  const [patientid,setPatientid] = useState(''); 
  const [name,setName] = React.useState('');
  const [age,setAge] = useState('');
  const [admissiondate,setAdmissiondate] = useState('');
  const [wardnumber,setWardnumber] = useState('');
  const [patientObj, setPatientObj] = useState(null);
  
    // useEffect(() => {
    //   setPatientid(sessionStorage.getItem('currentpatientId'));
    //   // Example Axios GET call when the component mounts
    //   axios.get(`http://localhost:9094/getAdmissionById/${patientid}`)
    //     .then(response => {
    //       // Handle the response data and update state
    //       console.log("responseData");
    //       console.log(response.data);
    //       setPatientObj(response.data);
    //       if(patientObj){
    //        setName(patientObj.name);
    //        setAge(patientObj.age);
    //        setAdmissiondate(patientObj.admissiondate);
    //        setWardnumber(patientObj.wardnumber);
    //       }
    //     })
    //     .catch(error => {
    //       console.error('Axios GET error:', error);
    //     });
    // }, []);

    useEffect(() => {
      const fetchData = async () => {
        setPatientid(sessionStorage.getItem('currentpatientId'));
        try {
          const response = await axios.get(`http://localhost:9094/getAdmissionById/${patientid}`);

          if (response.status === 200) {
            console.log("responseData");
            console.log(response.data);
            setPatientObj(response.data);
            console.log("patientObj",patientObj);
            if(patientObj){
              console.log("hello inside if");
             setName(patientObj.name); console.log(name);
             setAge(patientObj.age);
             setAdmissiondate(patientObj.admissiondate);
             setWardnumber(patientObj.wardnumber);
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);




  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    sessionStorage.removeItem('setRole');
  };

  const navigate = useNavigate();
  const routeHome = () => {
    navigate('/' + props.homepage);
  };

  const handleSubmit = () => {
   
  };

  return (
    <React.Fragment>
    <AppBar position="static" sx={{ backgroundColor: '#3b0087', height: '4.1rem', padding: 0, margin: 0 }}>
  <Container maxWidth="xl" sx={{ backgroundImage: `url(${patientHomeBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <Toolbar disableGutters>
      <IconButton onClick={routeHome}>
        <Avatar src={hospitalLogo} sx={{ height: 50, width: 50 }} />
      </IconButton>
      <Typography
        variant="h3"
        noWrap
        component="a"
        sx={{
          display: { xs: 'flex', md: 'flex' },
          fontFamily: 'sans-serif',
          fontWeight: 700,
          color: 'white',
          marginLeft: 2,
          cursor: 'pointer',
        }}
        onClick={routeHome}
      >
        HEALTH SURE
      </Typography>
      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ display: { xs: 'flex', md: 'flex' }, alignItems: 'center', paddingRight:2 }}>
      {/* {chatButton && 
          (<Button
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          sx={{ backgroundColor: 'greenyellow', color: 'black', marginLeft: '10px', height: '35px' }}
          >CHAT</Button>
  )} */}
      </Box>

      <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
        <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
         
        </IconButton>
      </Box>

      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src="/static/images/avatar/2.jpg" sx={{ height: 50, width: 50 }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography component="a" href="/" textAlign="center" sx={{ textDecoration: 'none' }}>
              {setting}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Toolbar>
  </Container>
</AppBar>

      {/* <AppBar position="static" sx={{ backgroundColor: 'black', height: '3rem', boxShadow: 'none' }}>
      
        <Container maxWidth="xl" sx={{ height: '0rem' }}></Container>
        <Toolbar disableGutters>
        <Box minWidth={250}>
           <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 700,
              letterSpacing: '.0rem',
              color: 'white',
              paddingLeft: 2,
              cursor: 'pointer',
            }}
            alignItems ='center'
            onClick={routeHome}
          >
            {props.pageName}

          </Typography></Box>
          <marquee>
          {isPatient && (
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                width:800,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'sans-serif',
                fontWeight: 700,
                letterSpacing: '.0rem',
                color: 'white',
                paddingLeft: 15,
                // cursor: 'pointer',
              }}
              onClick={routeHome}
            >Name:{name},  Age:{age},  AdmissionDate:{admissiondate},  Ward:{wardnumber} 
            </Typography>
          )}
           </marquee>
        </Toolbar>
      </AppBar> */}
    </React.Fragment>
  );
}

export default Navbar2;
