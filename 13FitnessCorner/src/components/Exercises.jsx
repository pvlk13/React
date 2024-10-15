import React from "react";
import { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { Box, Stack, Typography } from "@mui/material";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  console.log(exercises);
  return (
    <Box
      sx={{
        width: "100%",
        mt: { lg: "80px", xs: "50px" },
        ml: { sm: "80px" },
      }}
    >
      <Typography sx={{ fontSize: { lg: "44px", xs: "25px" } }}>
        Showing Results
      </Typography>
      <Stack>
        {exercises.map((exercise) => (
          <p>{exercise.name}</p>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
