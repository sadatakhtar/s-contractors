import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmail = () => {
    window.location.href =
      "mailto:example@example.com?subject=Free%20Quote%20Request";
    handleClose();
  };
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url(/path-to-image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h2" gutterBottom>
          Building Your Vision
        </Typography>
        <Typography variant="h5" gutterBottom>
          Transforming Spaces Inside and Out
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 3 }}
          onClick={handleClickOpen}
        >
          Get a Free Quote
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogContent>
            <DialogContentText>
              How would you like to get your free quote?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Call
            </Button>
            <Button onClick={handleEmail} color="primary">
              Email
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default HeroSection;
