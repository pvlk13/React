import React from "react";
import { useGlobalHook } from "../context/context";

function Search() {
  const { query, searchHandler } = useGlobalHook();
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          searchHandler(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
