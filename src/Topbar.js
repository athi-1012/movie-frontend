import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Topbar({ mode, setMode, isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Button color="inherit" onClick={() => navigate("/portal/home")}>Home</Button>
        <Button color="inherit" onClick={() => navigate("/portal/addmovie")}>Add Movie</Button>
        <Button color="inherit" onClick={() => navigate("/portal/movie")}>Movies</Button>

        <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
          <Button
            startIcon={mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            color="inherit"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? "Dark" : "Light"} Mode
          </Button>

         
        </div>
      </Toolbar>
    </AppBar>
  );
}
