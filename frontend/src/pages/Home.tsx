import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";


const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 27,
        }}
      >
        <Box
        sx={{
          font:"Robo",
          fontSize:"30px",
          fontWeight:"100"
        }}
        >
          <h1>AI Chat Bot</h1>
        </Box>
        {/* <Box sx={{ display: "flex", mx: "auto" }}>
          <img
            src="chat.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "80%" : "60%",
              borderRadius: 20,
              boxShadow: "-5px -5px 100px #fff",
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
            }}
          />
        </Box> */}
      </Box>
    </Box>
  );
};

export default Home;
