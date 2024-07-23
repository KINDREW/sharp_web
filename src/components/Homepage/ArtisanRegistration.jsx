import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AppPreview from "../../assets/hero_image.png";

const steps = [
  {
    title: "Create Your Profile",
    description:
      "Sign up and create your professional profile. Fill in details about your skills, experience, and services offered. Upload photos or portfolio samples to showcase your work",
  },
  {
    title: "Set Your Availability",
    description:
      "Set your availability and service areas. Choose when you're available to work and specify the locations you cover. This helps clients find you when they search for services",
  },
  {
    title: "Receive and Manage Requests",
    description:
      "Start receiving service requests from clients. Review job details, communicate with clients to finalize arrangements, and manage bookings efficiently. Build your reputation with great service and client reviews",
  },
];

const ArtisanRegistration = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 4 },
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={AppPreview}
            alt="App screenshot 1"
            sx={{ width: "100%", mb: { xs: 2, md: 0 }, borderRadius: 2 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            fontFamily="Poppins"
            sx={{
              fontSize: { xs: "h5.fontSize", sm: "h4.fontSize" },
              textAlign: "left",
              fontWeight: "700",
            }}
          >
            Register as an artisan in three easy steps
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            fontFamily="Manrope"
            sx={{
              fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" },
              textAlign: "left",
              mb: 2,
            }}
          >
            Join our network of skilled professionals, showcase your talents,
            and connect with clients effortlessly. Download SHARP! FOR SERPROS
            to get started and grow your business today.
          </Typography>
          <List>
            {steps.map((step, index) => (
              <ListItem key={index} alignItems="flex-start" sx={{ mb: 2 }}>
                <ListItemIcon>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "50%",
                    }}
                  >
                    {index + 1}
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary={step.title}
                  secondary={step.description}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      fontSize: { xs: "body1.fontSize", sm: "h6.fontSize" },
                    },
                    "& .MuiListItemText-secondary": {
                      opacity: 0.8,
                      fontFamily: "Poppins",
                      fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArtisanRegistration;
