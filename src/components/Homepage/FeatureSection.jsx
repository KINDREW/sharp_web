import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import featureImage from "../../assets/features.png";

const features = [
  {
    title: "Find Any Service You Need",
    description:
      "From home repairs and maintenance to personal care and tutoring, our app connects you with a diverse array of skilled professionals. No matter the task, we have the right expert for you.",
  },
  {
    title: "Verified Service Providers",
    description:
      "All our service providers go through a rigorous verification process to ensure you receive top-quality service. Read reviews and ratings from other users to make informed decisions.",
  },
  {
    title: "Trustworthy Reviews and Ratings",
    description:
      "Make informed decisions with our reliable user reviews and ratings. Read honest feedback from other users to find the best service providers who meet your standards.",
  },
];

const FeatureSection = () => {
  return (
    <Box
      sx={{ flexGrow: 1, p: { xs: 2, sm: 4 }, minHeight: "100vh" }}
      maxWidth="xl"
    >
      <Grid container spacing={4} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 3, md: 0 },
          }}
        >
          <img
            src={featureImage}
            alt="Service example"
            style={{
              width: "85%",
              borderTopLeftRadius: "20%",
              borderBottomRightRadius: "20%",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {features.map((feature, index) => (
            <Card
              key={index}
              sx={{
                mb: { xs: 2, sm: 3 },
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#FFC107", mr: 1 }} />
                  <Typography
                    variant="h6"
                    fontWeight="700"
                    fontFamily="Poppins"
                    sx={{
                      fontSize: { xs: "body1.fontSize", sm: "h6.fontSize" },
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  fontFamily="Poppins"
                  sx={{
                    fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" },
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeatureSection;
