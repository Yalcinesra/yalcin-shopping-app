import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const navigate=useNavigate()
  const handleBasket=()=>{
    navigate("/basket")
    console.log("basket");
  }
 
  return (
    <Box sx={{ flexGrow: 1,  }}>
      <AppBar position="static"
       sx={{backgroundColor:"white"}}
       >
        <Toolbar>
         
          <Typography onClick={()=>navigate("/")} variant="h6" color="black" component="div" sx={{ flexGrow: 1}}>
            Yalcin Shopping
          </Typography>
          <Typography onClick={handleBasket}><ShoppingCartIcon
           sx={{color:"black"}}></ShoppingCartIcon></Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}