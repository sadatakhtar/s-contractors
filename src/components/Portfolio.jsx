import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import imageOne from '../assets/images/img-16.jpg';
import imageTwo from '../assets/images/img-14.jpg';
import imageThree from '../assets/images/img-3.jpg';
import imageFour from '../assets/images/img-4.jpg';
import imageFive from '../assets/images/img-15.jpg';
import imageSix from '../assets/images/img-6.jpg';
import imageSeven from '../assets/images/img-7.jpg';
import imageEight from '../assets/images/img-10.jpg';
import imageNine from '../assets/images/img-12.jpg';


const portfolioItems = [
  {
    title: "Landing Renovation",
    image: imageOne,
    description: "Description of Project 1",
  },
  {
    title: "Living Room",
    image: imageTwo,
    description: "Description of Project 2",
  },
  {
    title: "Kitchen Extension",
    image: imageThree,
    description: "Description of Project 3",
  },
  {
    title: "Bathroom Renovation",
    image: imageFour,
    description: "Description of Project 3",
  },
  {
    title: "Hallway Renovation",
    image: imageFive,
    description: "Description of Project 3",
  },
  {
    title: "Landing Renovation",
    image: imageSix,
    description: "Description of Project 3",
  },
  {
    title: "Landing Renovation",
    image: imageSeven,
    description: "Description of Project 3",
  },
  {
    title: "Kitchen Extension",
    image: imageEight,
    description: "Description of Project 3",
  },
  {
    title: "Kitchen Extension",
    image: imageNine,
    description: "Description of Project 3",
  },
 
];

const Portfolio = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: { xs: 2, md: 4 } }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", marginBottom: 4 }}
      >
        Our Portfolio
      </Typography>
      <Grid container spacing={2}>
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
