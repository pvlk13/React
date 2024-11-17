import React from "react";
import { useGlobalHook } from "../context/context";
function Pagination() {
  const { nbPages, page, prevHandler, nextHandler } = useGlobalHook();
  return (
    <div className="pagination">
      <button onClick={prevHandler}>Prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}

export default Pagination;
