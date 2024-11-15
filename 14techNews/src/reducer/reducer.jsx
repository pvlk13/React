const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LOADING":
      return { ...state, isloading: true };
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        isloading: false,
      };
  }
  return <div></div>;
};
export default reducer;
