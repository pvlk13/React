import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
