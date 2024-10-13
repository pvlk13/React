import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../components/Footer.jsx";
import Home from "../pages/Home.jsx";
import ExerciseDetails from "../pages/ExerciseDetails.jsx";
import Navbar from "../components/Navbar.jsx";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
