import React from "react";
import { Container, Typography, Box } from "@mui/material";
import aboutHero from "../assets/about_hero.png";

const About = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${aboutHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 2, sm: 4, md: 6 },
        mt: -9,

        zIndex: -1,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: { xs: "60px" },
        }}
      >
        <Box sx={{ marginBottom: { xs: 3, md: 4 }, width: "100%" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            About Donwudi Investments
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              marginTop: { xs: 2, md: 3 },
            }}
            fontFamily="Poppins"
          >
            At Donwudi Investments, we are dedicated to creating solutions that
            bridge the gap between service providers and clients. With a focus
            on innovation, quality, and user satisfaction, we develop
            cutting-edge applications that make life easier and businesses more
            efficient.
          </Typography>
        </Box>
        <Box sx={{ marginBottom: { xs: 3, md: 4 }, width: "100%" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              marginTop: { xs: 2, md: 3 },
            }}
            fontFamily="Poppins"
          >
            Our mission is to empower individuals and businesses by providing
            them with tools that simplify everyday tasks. We strive to deliver
            exceptional digital experiences that connect skilled professionals
            with clients who need their services, fostering trust and
            convenience in every interaction.
          </Typography>
        </Box>
        <Box sx={{ marginBottom: { xs: 3, md: 4 }, width: "100%" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              marginTop: { xs: 2, md: 3 },
            }}
            fontFamily="Poppins"
          >
            We envision a world where finding and providing services is
            seamless, transparent, and reliable. By leveraging technology, we
            aim to transform how people connect and collaborate, making it
            simpler for everyone to achieve their goals.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
