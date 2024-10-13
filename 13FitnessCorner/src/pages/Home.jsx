import React from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <SearchExercise />
      <Exercises />
    </>
  );
};

export default Home;
