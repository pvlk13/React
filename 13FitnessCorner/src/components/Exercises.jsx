import React from "react";
import { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { Box, Stack, Typography, Grid, Pagination } from "@mui/material";

import ExerciseCard from "./ExerciseCard";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 2;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, []);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setExercises(
        bodyPart === "all"
          ? exercisesData
          : exercisesData.filter((item) => item.bodyPart === bodyPart)
      );
    };
    fetchExercisesData();
  }, [bodyPart]);
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
      <Grid
        container
        spacing={10}
        marginTop={"20px"}
        ml="10px"
        mr="10px"
        md="40px"
        gap={"100px"}
      >
        {currentExercises.map((exercises, index) => (
          <ExerciseCard key={index} exercises={exercises} />
        ))}
      </Grid>
      <Stack alignItems="center" mt="10px">
        <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      </Stack>
    </Box>
  );
};

export default Exercises;
