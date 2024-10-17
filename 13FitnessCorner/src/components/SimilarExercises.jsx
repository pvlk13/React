import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "20px", xs: "0" }, p: "20px", alignItems: "center" }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, alignItems: "center" }}
      >
        Similar Exercises of{" "}
        <span style={{ color: "#FF2625" }}>Target Muscle</span>
      </Typography>

      <Stack direction="row" sx={{ p: "2", position: "relative" }} gap="40px">
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <div>No SimilarExercises</div>
        )}
      </Stack>

      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, alignItems: "center" }}
      >
        Similar Exercises of <span style={{ color: "#FF2625" }}>Equipment</span>
      </Typography>

      <Stack direction="row" sx={{ p: "2", position: "relative" }} gap="40px">
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <div>No SimilarExercises</div>
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
