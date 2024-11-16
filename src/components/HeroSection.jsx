import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(/path-to-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="h2" gutterBottom>
          Building Your Vision
        </Typography>
        <Typography variant="h5" gutterBottom>
          Transforming Spaces Inside and Out
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
          Get a Free Quote
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
