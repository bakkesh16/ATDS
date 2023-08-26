import React, { useState } from 'react';
import {
    Container,
    Paper,
    TextField,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useEffect } from 'react';
import Navbar2 from '../NavBar/nonHomeNav';
import BG from '../images/AllPageBG.jpg';


const HospitalChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    const handleSendMessage = () => {
      const data = {
        message: newMessage,
      };
  
      const url = 'http://localhost:8083/sendMessageToInsurance';
  
      axios
        .post(url, data)
        .then((response) => {
          console.log(response.data);
          // Add the sent message to the messages state with sender 'You'
          if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, sender: 'You' }]);
          }
          setNewMessage('');
        })
        .catch((error) => {
          console.error('Error while Sending Data:', error);
        });
    };
  
    const fetchIncomingMessages = () => {
      axios
        .get('http://localhost:8083/receiveMessageFromInsurance')
        .then((response) => {
          if (typeof response.data === 'string' && response.data.trim() !== '') {
            // Handle a single non-empty message
            const incomingMessage = response.data;
            console.log('incoming message:', incomingMessage);
            setMessages((prevMessages) => [
              ...prevMessages,
              { text: incomingMessage, sender: 'Insurance Admin' },
            ]);
          }
        })
        .catch((error) => {
          console.error('Error while Fetching Incoming Messages:', error);
        });
    };

    useEffect(() => {
      // Fetch incoming messages every 5 seconds (adjust as needed)
      const intervalId = setInterval(fetchIncomingMessages, 5000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return (
      <React.Fragment>
        <Navbar2  homepage = 'HospitalAdminHome'></Navbar2>
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
        <Container maxWidth="sm" sx={{  backgroundColor: '#fef8dd', paddingTop: 1.5,paddingBottom:1.5, display: 'flex', flexDirection: 'column', height: '90vh', width: '100%' }}> 
        <Paper elevation={3} sx={{ flexGrow: 1, overflowY: 'auto', marginBottom: 2, padding: 1,  }} >
          <List>
            {messages.map((message, index) => (
              <ListItem
                key={index}
                alignItems="flex-start"
                sx={{
                  alignSelf: message.sender === 'You' ? 'flex-end' : 'flex-start',
                  marginBottom: 1,
                  justifyContent: message.sender === 'You' ? 'flex-end' : 'flex-start',
                }}
              >
                <ListItemText
                  primary={message.text}
                  secondary={message.sender}
                  secondaryTypographyProps={{ color: message.sender === 'You' ? '#FFC436' : 'yellow', fontSize: 12 }}
                  sx={{
                    paddingLeft:'7px',
                    width:'10px',
                    borderRadius: '10px',
                    backgroundColor: message.sender === 'You' ? '#614BC3' : '#337CCF',
                    color:message.sender === 'You' ? 'white' : 'white',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
        <Divider />
        <Paper elevation={0} sx={{ borderColor:'#fef8dd' ,backgroundColor: '#fef8dd',display: 'flex', alignItems: 'center', marginBottom: 0, padding: 1, }}>
          <TextField
            // variant="outlined"
            fullWidth
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            sx={{ borderRadius: '15px  #fef8dd',backgroundColor:'white', marginRight: 2,  }}
          />
          <IconButton onClick={handleSendMessage} sx={{ backgroundColor: '#3b0087', color: 'white',height:'50px',width:'50px' }}>
            <SendIcon/>
          </IconButton>
        </Paper>
      </Container>
      </div>
      </React.Fragment>
    );
};

export default HospitalChatPage;
