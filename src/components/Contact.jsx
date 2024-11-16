import React from 'react';
import { Box, Typography, Grid, Card, CardContent, IconButton } from '@mui/material';
import { Phone, Email } from '@mui/icons-material';

const Contacts = () => {
  const phoneNumber = '(555) 123-4567';
  const emailAddress = 'info@contractor.com';

  return (
    <Box sx={{ py: 5, px: 2, backgroundColor: '#f4f4f4' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Get In Touch
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph>
        Contact us for a free consultation or any inquiries you may have.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Phone Contact */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
            <IconButton color="primary" sx={{ fontSize: 40 }}>
              <Phone fontSize="inherit" />
            </IconButton>
            <CardContent>
              <Typography variant="h6">Call Us</Typography>
              <Typography variant="body2" color="text.secondary">
                {phoneNumber}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Email Contact */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
            <IconButton color="primary" sx={{ fontSize: 40 }}>
              <Email fontSize="inherit" />
            </IconButton>
            <CardContent>
              <Typography variant="h6">Email Us</Typography>
              <Typography variant="body2" color="text.secondary">
                {emailAddress}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contacts;
