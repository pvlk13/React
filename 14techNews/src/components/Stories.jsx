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
    <div className="stories-div">
      {hits.map((story) => {
        const { title, url, author, num_comments, objectID } = story;
        return (
          <>
            <div className="card">
              <h2>{title}</h2>
              <p>
                By <span>{author}</span>| <span>{num_comments}</span> comments
              </p>
              <div className="card-button">
                <a href={url} target="_blank">
                  Read More{" "}
                </a>
                <a href="#">Remove</a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Stories;
