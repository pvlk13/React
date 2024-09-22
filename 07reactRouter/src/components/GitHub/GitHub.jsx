import React, { useEffect, useState } from "react";

function GitHub() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((data) => {
        console.log(setData(data));
      });
  }, []);
  return (
    <>
      <h1>GitHub</h1>
      <p>No of followers: {data.followers}</p>
    </>
  );
}

export default GitHub;
