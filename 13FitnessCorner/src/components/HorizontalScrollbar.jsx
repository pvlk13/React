import React from "react";

const HorizontalScrollbar = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.title}>{item}</div>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
