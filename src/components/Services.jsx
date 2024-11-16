import React from "react";
import { Box, Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
//import Grid from "@mui/material/Unstable_Grid2"; // Import Grid2
import {
  Construction,
  Brush,
  Build,
  HomeRepairService,
  FormatPaint,
  Handyman,
  BuildCircle,
  AutoFixHigh,
} from "@mui/icons-material";

const servicesData = [
  {
    title: "Skimming",
    icon: <FormatPaint fontSize="large" />,
    description: "Smooth finishes for walls and ceilings.",
  },
  {
    title: "Plastering",
    icon: <Construction fontSize="large" />,
    description: "High-quality plastering for any surface.",
  },
  {
    title: "Painting",
    icon: <Brush fontSize="large" />,
    description: "Interior and exterior painting services.",
  },
  {
    title: "Decorating",
    icon: <AutoFixHigh fontSize="large" />,
    description: "Professional decorating to enhance your space.",
  },
  {
    title: "Tiling",
    icon: <BuildCircle fontSize="large" />,
    description: "Expert tiling for bathrooms, kitchens, and floors.",
  },
  {
    title: "Extensions",
    icon: <HomeRepairService fontSize="large" />,
    description: "Extend your home with quality construction.",
  },
  {
    title: "Loft Conversions",
    icon: <Handyman fontSize="large" />,
    description: "Transform your loft into a livable space.",
  },
  {
    title: "Renovations",
    icon: <Build fontSize="large" />,
    description: "Complete home renovations for modern living.",
  },
  {
    title: "Building Maintenance",
    icon: <Construction fontSize="large" />,
    description: "Regular maintenance to keep your property in top shape.",
  },
];

const Services = () => {
  return (
    <Box sx={{ py: 5, px: 2, backgroundColor: "#f4f4f4" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        paragraph
      >
        Quality craftsmanship and reliable services tailored to your needs.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {servicesData.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
              }}
            >
              <CardMedia sx={{ my: 2 }}>{service.icon}</CardMedia>
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
