import React from "react";
import { Grid, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercises }) => {
  return (
    <Link className="exercise-card" to={`exercises/exercise/${exercises.id}`}>
      <img src={exercises.gifUrl} loading="lazy" />
      <Grid container>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
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
      </Grid>
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
