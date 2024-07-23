import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  "How do I make sure the service providers on SHARP! are trustworthy?",
  "How do I make sure the service providers on SHARP! are trustworthy?",
  "How do I make sure the service providers on SHARP! are trustworthy?",
  "How do I make sure the service providers on SHARP! are trustworthy?",
];

const FAQSection = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "2em",
        paddingX: { xs: 2, sm: 4 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ width: "85%" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontFamily="Poppins"
          sx={{
            fontSize: { xs: "h5.fontSize", sm: "h4.fontSize" },
            fontWeight: "700",
            mb: "2em",
          }}
        >
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              marginBottom: "3em",
              borderLeft: "2px solid",
              borderRight: "2px solid",
              borderBottom: "2px solid",
              borderTop: "none",
              borderColor: "grey.300",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: { xs: "body1.fontSize", sm: "h6.fontSize" },
                  fontWeight: "700",
                }}
              >
                {faq}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" },
                  opacity: 0.8,
                }}
              >
                {/* Add the answer content here */}
                The content of the answer goes here.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQSection;
