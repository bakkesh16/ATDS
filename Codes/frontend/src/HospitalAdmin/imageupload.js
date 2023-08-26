import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function ImageUpload() {
  const [imageBytes, setImageBytes] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Convert the image to bytes
        const bytes = new Uint8Array(reader.result);
        setImageBytes(bytes);
      };

      reader.readAsArrayBuffer(file);
    }
  };
  
 const handleRequestSubmit = (e) =>{
e.preventDefault();
console.log(imageBytes);
 }

  return (
    <React.Fragment>
    <TextField
      type="file"
      label="Upload Image"
      onChange={handleImageChange}
      inputProps={{
        accept: '.txt',
      }}
    />
    <Button
    type="submit"
    variant="contained"
    onClick={handleRequestSubmit}
    sx={{ backgroundColor: 'red', color: 'white', marginLeft: '10px', height: '56px' }}>Discharge</Button>
</React.Fragment>
  );
}

export default ImageUpload;
