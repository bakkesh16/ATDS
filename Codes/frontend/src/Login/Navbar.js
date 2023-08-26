import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import { colors } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import hospitalLogo from '../images/hospitalLogo.png';
import patientHomeBG from '../images/patientHomeBG.jpg';
import carbonFiberNav from '../images/carbonFiberNavbar.webp';

const settings = ['Logout'];

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const role = sessionStorage.getItem('setRole');
  const [isPatient,setIsPatient] = React.useState(role === 'PATIENT') ;
  const [chatButton,setChatButton] = React.useState((role === 'HOSPITAL ADMIN') || (role === 'INSURANCE ADMIN')) ;
  const navigete = useNavigate();
  console.log("role : ",role);
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
  
  const tologin = () =>{
    navigete('/')
  }

  const handleSubmit = () => {
   
  };

  return (
    <React.Fragment>
    <AppBar position="static" sx={{ backgroundColor: 'black', height: '5.6rem', padding: 0, margin: 0 }}>
  <Container maxWidth="xl" sx={{ backgroundImage: `url(${patientHomeBG})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '5.6rem' }}>
    <Toolbar disableGutters>
    <IconButton onClick={tologin}>
        <Avatar src={hospitalLogo} sx={{ height: 65, width: 65 }} />
      </IconButton>
      <Typography
        variant="h2"
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
        onClick={tologin}
      >
        HEALTH SURE
      </Typography>
    </Toolbar>
  </Container>
</AppBar>
    </React.Fragment>
  );
}

export default Navbar;