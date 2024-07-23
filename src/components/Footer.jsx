import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
      fontSize="15px"
      px={2}
      textAlign={{ xs: "center", sm: "left" }}
    >
      <Typography variant="h6" fontSize="15px" mt={{ xs: 2, sm: 0 }}>
        DonWudi Investments © 2023. All rights reserved.
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "flex-start" },
          //   gap: { xs: 1, sm: 2 },
        }}
      >
        <ListItem sx={{ width: "auto" }}>Terms</ListItem>
        <ListItem
          sx={{
            width: "auto",
          }}
        >
          Privacy
        </ListItem>
        <ListItem
          sx={{
            width: "auto",
          }}
        >
          Support
        </ListItem>
        <ListItem
          sx={{
            width: "auto",
          }}
        >
          About
        </ListItem>
        <ListItem
          sx={{
            width: "auto",
          }}
        >
          Resource
        </ListItem>
        <ListItem
          sx={{
            width: "auto",
          }}
        >
          Contact
        </ListItem>
      </List>
    </Box>
  );
}
