import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import AppPreview from "../../assets/hero_image.png";
import PlayStore from "../../assets/play_store.png";
import AppStore from "../../assets/app_store.png";

const HeroSection = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingX: { xs: 2, sm: 4, md: 6 },
        pt: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Grid container spacing={5}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontFamily="Poppins"
            sx={{
              fontWeight: "800",
              marginBottom: { xs: "12px", md: "16px" },
              fontSize: { xs: "h4.fontSize", sm: "h3.fontSize" },
            }}
          >
            Find Trusted Service Providers for Any Job
          </Typography>
          <Typography
            variant="h6"
            component="p"
            fontFamily="Poppins"
            gutterBottom
            sx={{
              fontWeight: "700",
              marginBottom: { xs: "12px", md: "16px" },
              fontSize: { xs: "body1.fontSize", sm: "h6.fontSize" },
            }}
          >
            Connect with Skilled Professionals Quickly and Easily
          </Typography>
          <Typography
            variant="body1"
            component="p"
            fontFamily="Poppins"
            sx={{
              fontWeight: "100",
              opacity: "0.7",
              fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" },
            }}
            gutterBottom
          >
            Whether you need a plumber, electrician, cleaner, or any other
            service, SHARP! helps you find the right person for the job in just
            a few clicks. Explore a wide range of trusted professionals in your
            area, read reviews, compare quotes, and book services with
            confidence.
          </Typography>
          <Box
            mt={3}
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row" },
              gap: 2,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <img
              src={PlayStore}
              alt="Get it on Google Play"
              style={{ height: "48px", cursor: "pointer" }}
            />
            <img
              src={AppStore}
              alt="Download on the App Store"
              style={{ height: "48px", cursor: "pointer" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: { xs: "center", md: "left" }, // Center image on small screens
          }}
        >
          <img
            src={AppPreview}
            alt="App preview"
            style={{ width: "100%", height: "auto" }} // Responsive image
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
