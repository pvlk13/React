import React from "react";
import { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { Box, Stack, Typography, Grid } from "@mui/material";

import ExerciseCard from "./ExerciseCard";

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
      <Grid container spacing={10} marginTop={"20px"}>
        {exercises.map((exercises, index) => (
          <ExerciseCard key={index} exercises={exercises} />
        ))}
      </Grid>
    </Box>
  );
};

export default Exercises;
