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
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "REMOVE_STORY":
      return {
        ...state,
        hits: state.hits.filter((story) => {
          return story.objectID !== action.payload;
        }),
      };
  }
  return <div></div>;
};
export default reducer;
