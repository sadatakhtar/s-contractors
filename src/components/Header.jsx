import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleServicesBtn = () => {
    console.log('nav to services!')
    navigate("/services");
    
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sid Contractors Ltd
        </Typography>
        <Button onClick={() => navigate('/')} color="inherit">Home</Button>
        <Button onClick={handleServicesBtn} color="inherit">
          Services
        </Button>
        <Button onClick={() => navigate('/protfolio')} color="inherit">Portfolio</Button>
        <Button onClick={() => navigate('/contact')} color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
