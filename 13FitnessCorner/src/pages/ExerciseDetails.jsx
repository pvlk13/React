import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Details from "../components/Details.jsx";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { useState, useEffect } from "react";

const ExerciseDetails = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Stack>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Stack>
  );
};

export default ExerciseDetails;
