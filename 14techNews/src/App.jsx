import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import Search from "./components/Search";
import { fetchApi } from "./../../realEstate/src/utils/FetchApi";

function App() {
  const url = "http://hn.algolia.com/api/v1/search?query=html";
  const fetchAPI = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAPI(url);
  }, []);
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
