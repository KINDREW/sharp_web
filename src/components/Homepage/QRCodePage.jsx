import React from "react";
import { Box, Typography } from "@mui/material";
import QrCode from "../../assets/QRCode.png";
import QrBack from "../../assets/QRbackground.jpg";

const QRCodePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: `url(${QrBack})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: { xs: 2, sm: 4 }, // Responsive padding
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 2, // Ensure the content is above the overlay
          padding: { xs: 2, sm: 4 }, // Responsive padding
        }}
      >
        <img
          src={QrCode}
          alt="QR Code"
          style={{
            width: "80%", // Responsive width
            maxWidth: "300px", // Max width for larger screens
            height: "auto",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            marginTop: { xs: "10px", sm: "20px" },
            color: "#fff",
            fontSize: { xs: "1rem", sm: "1.25rem" },
            fontWeight: "500",
          }}
        >
          Scan the QR code above to download SHARP!
        </Typography>
      </Box>
    </Box>
  );
};

export default QRCodePage;
