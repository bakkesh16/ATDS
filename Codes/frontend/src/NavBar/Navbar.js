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

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const role = sessionStorage.getItem('setRole');
  const [isPatient, setIsPatient] = React.useState(role === 'PATIENT');
  const [chatButton, setChatButton] = React.useState((role === 'HOSPITAL ADMIN') || (role === 'INSURANCE ADMIN'));
  console.log("role : ", role);

  const [patientid, setPatientid] = useState('');
  const [name, setName] = React.useState('');
  const [age, setAge] = useState('');
  const [admissiondate, setAdmissiondate] = useState('');
  const [wardnumber, setWardnumber] = useState('');
  const [patientObj, setPatientObj] = useState(null);
  const [isAdmitted, setIsAdmitted] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [isDischarged, setIsDischarged] = useState(false);
  const [isRequested, setIsRequested] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setPatientid(sessionStorage.getItem('currentpatientId'));
      console.log("the name", patientid);
      try {
        const response = await axios.get(`http://localhost:9094/getAdmissionById/${sessionStorage.getItem('currentpatientId')}`);
        console.log("hi");
        console.log("status resp", response.status);
        if (response.status === 200) {
          console.log("responseData");
          console.log(response.data);
          setPatientObj(response.data);
          console.log("patientObj", patientObj);
          if (response.data) {
            const dataObj = response.data;
            console.log("hello inside if");
            setName(dataObj.name); console.log("name", dataObj.name);
            setAge(dataObj.age); console.log("age", dataObj.age);
            setAdmissiondate(dataObj.admissiondate);
            setWardnumber(dataObj.wardnumber);
            setIsRequested((dataObj.status === 'REQUESTED'));
            setIsAdmitted((dataObj.status === 'ADMITTED'));
            setIsDischarged((dataObj.status === 'DISCHARGED' || dataObj.status === 'CHECKOUT'))
          }
          else {
            setIsNew(true);
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

  
  const handleChat = () => {
    console.log('Hello inside handle chat :  '+ role);
    if(role==='HOSPITAL ADMIN'){
      navigate('/hospitalchat');
    }
    else if(role==='INSURANCE ADMIN'){
      navigate('/insurancechat');
    }
  };


  const handleSubmit = () => {

  };

  return (
    <React.Fragment>
      <AppBar position="static" sx={{ backgroundColor: '#3b0087',height: '4.1rem', padding: 0, margin: 0 }}>
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

            <Box sx={{ display: { xs: 'flex', md: 'flex' }, alignItems: 'center', paddingRight: 2 }}>
              {chatButton &&
                (<Button
                  type="button"
                  variant="contained"
                  onClick={handleChat}
                  sx={{ backgroundColor: 'greenyellow', color: 'black', marginLeft: '10px', height: '35px' }}
                >CHAT</Button>
                )}
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

      <AppBar position="static" sx={{ backgroundColor: 'black', height: '3rem', boxShadow: 'none' }}>

        <Container maxWidth="xl" sx={{ height: '0rem' }}></Container>
        <Toolbar disableGutters>
          <Box minWidth={280}>
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
              alignItems='center'
              onClick={routeHome}
            >
              {props.pageName}

            </Typography></Box>
          <marquee>
            {isPatient && isAdmitted && (
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  width: 800,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'sans-serif',
                  fontWeight: 700,
                  letterSpacing: '.0rem',
                  color: 'white',
                  paddingLeft: 15,
                  // cursor: 'pointer',
                }}
                onClick={routeHome}
              >Name:{name}, || Age:{age}, || AdmissionDate:{admissiondate}, || Ward:{wardnumber}
              </Typography>
            )}

            {isPatient && isNew && (
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  width: 800,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'sans-serif',
                  fontWeight: 700,
                  letterSpacing: '.0rem',
                  color: 'white',
                  paddingLeft: 15,
                  // cursor: 'pointer',
                }}
                onClick={routeHome}
              >Hello, Welcome to HealthSure...
              </Typography>
            )}

            {isPatient && isRequested && (
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  width: 800,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'sans-serif',
                  fontWeight: 700,
                  letterSpacing: '.0rem',
                  color: 'white',
                  paddingLeft: 15,
                  // cursor: 'pointer',
                }}
                onClick={routeHome}
              >{'Your Request is being processed...'}
              </Typography>
            )}

            {isPatient && isDischarged && (
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  width: 800,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'sans-serif',
                  fontWeight: 700,
                  letterSpacing: '.0rem',
                  color: 'white',
                  paddingLeft: 15,
                  // cursor: 'pointer',
                }}
                onClick={routeHome}
              >{'Thankyou for choosing Healthsure. Happy to serve you...'}
              </Typography>
            )}
          </marquee>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
