import React from "react";
import { useGlobalHook } from "../context/context";

function Stories() {
  const { hits, isloading } = useGlobalHook();
  if (isloading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div>
      {hits.map((item) => (
        <li>{item.title}</li>
      ))}
    </div>
  );
}

export default Stories;
