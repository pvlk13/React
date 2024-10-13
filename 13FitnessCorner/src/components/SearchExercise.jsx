import { Typography, Box, Stack, TextField, Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData.jsx";
import HorizontalScrollbar from "./HorizontalScrollbar.jsx";

const SearchExercise = () => {
  useEffect(() => {
    fetchExercisesData();
  }, []);
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  const fetchExercisesData = async () => {
    const bodyPartsData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      exerciseOptions
    );

    setBodyParts(["all", ...bodyPartsData]);
  };

  const handleSubmit = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );
    }
  };

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
          value={search}
          placeholder="Search Exercises"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <Button
          onClick={handleSubmit}
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
        <Box>
          <HorizontalScrollbar data={bodyParts} />
        </Box>
      </Box>
    </Stack>
  );
};

export default SearchExercise;
