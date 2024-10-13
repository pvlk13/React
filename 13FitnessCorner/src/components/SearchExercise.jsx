import { Typography, Box, Stack, TextField, Button } from "@mui/material";
import React from "react";

const SearchExercise = () => {
  return (
    <Stack alignItems="center">
      <Typography
        fontWeight="bold"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          alignContent: "center",
          position: "relative",
          right: "10px",
          justifyContent: "center",
        }}
        textAlign={"center"}
      >
        Awesome Exercises <br /> You Can Try
      </Typography>
      <Box>
        <TextField
          sx={{
            width: { lg: "800px", xs: "350px" },
            height: "26px",
            mt: "10px",
            mb: "20px",
            borderRadius: "10px",
            border: "none",
          }}
          value=""
          placeholder="Search Exercises"
          type="text"
          onChange={(e) => {}}
        />
        <Button
          onClick={() => {}}
          variant="contained"
          color="error"
          height="50px"
          sx={{
            width: { lg: "200px", xs: "350px" },
            position: "relative",
            right: "20px",
            justifyContent: "center",
            height: "55px",
            mt: "10px",
            left: "10px",
          }}
        >
          Search Exercises
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercise;
