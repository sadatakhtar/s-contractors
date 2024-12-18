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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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

  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/447301065151";
    handleClose();
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "447301065151"; // Replace with your phone number
    const message = "Hello, I would like to inquire about your services!"; // Optional predefined message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank"); // Open link in a new tab
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
        Welcome to Sid Contractors 
        </Typography>
        <Typography variant="h5" gutterBottom>
          At Sid Contractors, we specialize in turning houses into homes and
          visions into reality. Serving the heart of the West Midlands, we pride
          ourselves on delivering top-notch craftsmanship that combines
          exceptional quality with affordable pricing. Whether you're planning a
          stunning home renovation, adding an elegant extension, or refreshing
          your space with professional painting and decorating, our experienced
          team is here to help. We believe in providing personalized service,
          meticulous attention to detail, and results that exceed
          expectations—all while staying within your budget. From the first
          brick to the final brushstroke, we’re committed to creating beautiful,
          lasting spaces you’ll love. Let’s build your dream together. Get in
          touch today to discover quality you can trust at a price you can
          afford.
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
        {/* <Button
      variant="contained"
      color="success"
      startIcon={<WhatsAppIcon />}
      onClick={handleWhatsAppClick}
      sx={{
        position: 'fixed', // Optional to make it float
        bottom: 16, // Adjust positioning
        right: 16,
      }}
    >
      Chat on WhatsApp
    </Button> */}

        <WhatsAppIcon
          sx={{
            position: "fixed", // Optional to make it float
            bottom: 16, // Adjust positioning
            right: 16,
            fontSize: 40,
            color: "#25D366", // Green color for the icon
            backgroundColor: "white", // White background
            borderRadius: "50%", // Make it circular
            padding: "8px", // Add some padding
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
          color="success"
          onClick={handleWhatsAppClick}
        />

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogContent>
            <DialogContentText>
              How would you like to get your free quote?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose} color="primary">
              Call
            </Button> */}
            <Button onClick={handleEmail} color="primary">
              Email
            </Button>
            <Button onClick={handleWhatsApp} color="primary">
              whatsapp
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default HeroSection;
