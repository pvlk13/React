import React from "react";
import { Stack, Box, Typography } from "@mui/material"; //Stack from "@mui/material/Stack";
import Icon from "../assets/icons/gym.png";
import Exercises from "../components/Exercises";
import ExerciseCard from "./ExerciseCard";

const BodyPartCard = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: bodyPart === item ? "2px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        marginTop: "35px",
        cursor: "pointer",
        width: "170px",
      }}
      onClick={() => {
        setBodyPart(item);
        console.log(item);
        window.scrollTo({ top: 1000, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "20px", height: "20px" }}
      />
      <Typography
        fontSize="20px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPartCard;
