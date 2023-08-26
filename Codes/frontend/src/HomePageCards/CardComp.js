import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import patientHomeBG from '../images/patientHomeBG.jpg';
import CardBG from '../images/CardBG.webp';

const enlargeScale = 1.1; // Scale factor for enlargement

export default class CardComp extends React.Component {
  state = {
    isHovered: false,
    cardMaxWidth: 345, // Default card width
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  componentDidMount() {
    // Set card width based on screen width
    const screenWidth = window.innerWidth;
    const cardMaxWidth = Math.min(500, screenWidth - 40); // Limit card width to 500 and adjust for padding/margin
    this.setState({ cardMaxWidth });
  }

  render() {
    const { isHovered, cardMaxWidth } = this.state;
    let pad = 0;
    if (this.props.padd) {
      pad = parseInt(this.props.padd);
    }
    return (
      <Card
        sx={{
          maxWidth: cardMaxWidth,
          boxShadow: isHovered ? 10 : 7, // Increase boxShadow on hover
          transform: isHovered ? `scale(${enlargeScale})` : 'scale(1)', // Enlarge on hover
          transition: 'box-shadow 0.3s, transform 0.3s',
          border: '1px solid purple', // Add thin black border
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <CardActionArea href={this.props.hrf}>
          <CardContent sx={{ backgroundColor: 'lightcyan', backgroundImage: `url(${patientHomeBG})`, backgroundSize:'cover' }}>
            <Avatar
              alt="Avatar"
              src={this.props.image}
              sx={{
                width: 200,
                height: 200,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </CardContent>
          <CardContent sx={{ backgroundColor: 'black' }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontStyle: 'unset',
                textAlign: 'center',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1.75rem',
                color: 'white',
              }}
            >
              {this.props.cardName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
