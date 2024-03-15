import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Topbar({mode,setMode}) {
    const navigate=useNavigate()
  return (
    
      <AppBar position="static">
        <Toolbar className='toolbar'>
        &nbsp;&nbsp;&nbsp;
          <Button color="inherit" onClick={()=>navigate("/portal/home")} style={{color:"white" , backgroundColor: "" , fontSize:"15px"}}>Home</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="inherit" onClick={()=>navigate("/portal/addmovie")} style={{color:"white" , backgroundColor: "" , fontSize:"15px"}}>Add Movie</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="inherit" onClick={()=>navigate("/portal/movie")} style={{color:"white" , backgroundColor: "" , fontSize:"15px"}}>Movies</Button>
          
         &nbsp;&nbsp;&nbsp; <Button 
          style={{marginLeft:"60%"}}
          startIcon={mode==="light" ?<Brightness4Icon/>:<Brightness7Icon/>}
          color='inherit'
          onClick={()=>setMode(mode==="light"?"dark":"light")}>
            {mode==="light"?"dark":"light"} Mode
          </Button>
        </Toolbar>
      </AppBar>
   
  );
}
