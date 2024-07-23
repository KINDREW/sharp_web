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
import third from "../../assets/third.png";

const steps = [
  {
    title: "Search and Select",
    description:
      "Enter the type of service you need and your location. Browse through a list of verified service providers and compare their profiles, reviews, and ratings to find the perfect match.",
  },
  {
    title: "Book and Schedule",
    description:
      "Choose your preferred service provider and select a convenient time slot. Provide any necessary details about the job, and confirm your booking with just a few taps.",
  },
  {
    title: "Enjoy Quality Service",
    description:
      "Sit back and relax! Your chosen professional will arrive at the scheduled time to deliver top-notch service. Once the job is done, you can rate your experience and leave feedback to help others.",
  },
];

const Third = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 4, md: 6 },
        pt: { xs: 2, sm: 4, md: 6 },

        backgroundColor: "#FFD200",
      }}
    >
      <Grid container spacing={4}>
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
            Find an artisan from the comfort of your home
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
            Connect with skilled artisans in your area, view their portfolios,
            and book their services—all without leaving your couch. Experience
            convenience and quality with just a few clicks.
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
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={third}
            alt="App screenshot 1"
            sx={{
              width: "85%",
              mb: { xs: 2, md: 0 },
              borderTopLeftRadius: "20%",
              borderBottomRightRadius: "20%",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Third;
