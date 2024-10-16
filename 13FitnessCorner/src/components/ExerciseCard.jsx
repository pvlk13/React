import React from "react";
import { Grid, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ExerciseDetails from "../pages/ExerciseDetails";

const ExerciseCard = ({ exercises }) => {
  return (
    <Link className="exercise-card" to={`exercises/exercise/${exercises.id}`}>
      <img
        src={exercises.gifUrl}
        loading="lazy"
        sx={{ width: "100%", height: { xs: "250px", md: "300px" } }}
        alt="exercise"
      />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
          onClick={() => <ExerciseDetails />}
        >
          {exercises.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercises.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercises.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
