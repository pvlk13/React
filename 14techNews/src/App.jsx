import { useContext, useEffect } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import Search from "./components/Search";

function App() {
  return (
    <>
      <h1>Technical News </h1>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
