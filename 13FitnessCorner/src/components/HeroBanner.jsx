import React from "react";
import { Typography, Button, Box } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import "../App.css";
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="700" fontSize="26px">
        Fitness Corner
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
        mb={3}
      >
        Check out the most effective exercises personalized to you
      </Typography>
      <Button variant="contained" color="error" href="#exercises" px="40px">
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        paddingLeft={"220px"}
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "180px",
          mt: "-180px",
        }}
      >
        Exercises
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
        style={{
          width: "600px",
          height: "750px",
          position: "absolute",
          padding: "50px",
        }}
      />
    </Box>
  );
};

export default HeroBanner;
