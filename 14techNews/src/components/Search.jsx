import React from "react";
import { useGlobalHook } from "../context/context";

function Search() {
  const data = useGlobalHook();
  return <div>Search {data}</div>;
}

export default Search;
