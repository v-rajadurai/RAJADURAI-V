import * as React from 'react';
import '../index.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
export default function FrontWeb() 
{  
  return (
     <>
     <Box
          sx={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily:'',
          }}>
     <div style={{ height: '500px',color:'white'}}>
      
      <h2>Effective Medicine,New Medicine Every Day</h2>
      
    <Link to="/signin" variant="body2">
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 1 }}><h1>Welcome Started</h1></Button>
    </Link>  
    </div>
    </Box>
  </>

  );
}