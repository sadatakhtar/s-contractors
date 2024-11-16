import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleServicesBtn = () => {
    navigate("/services");
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <List>
        <ListItem button onClick={() => { navigate('/'); setDrawerOpen(false); }}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => { handleServicesBtn(); setDrawerOpen(false); }}>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button onClick={() => { navigate('/portfolio'); setDrawerOpen(false); }}>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem button onClick={() => { navigate('/contact'); setDrawerOpen(false); }}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sid Contractors Ltd
        </Typography>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            {drawer}
          </>
        ) : (
          <>
            <Button onClick={() => navigate('/')} color="inherit">Home</Button>
            <Button onClick={handleServicesBtn} color="inherit">Services</Button>
            <Button onClick={() => navigate('/portfolio')} color="inherit">Portfolio</Button>
            <Button onClick={() => navigate('/contact')} color="inherit">Contact</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;