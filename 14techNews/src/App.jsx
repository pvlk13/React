import { useContext, useEffect } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import Search from "./components/Search";
import { AppContext, useGlobalHook } from "./context/context";
function App() {
  const data = useGlobalHook();
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
      <h1>Technical News {data}</h1>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
