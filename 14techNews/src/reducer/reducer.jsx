const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LOADING":
      return { ...state, isloading: true };
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isloading: false,
      };
    case "NEXT_PAGE":
      let curPage = state.page;
      if (curPage >= state.nbPages) {
        curPage = 0;
      } else {
        curPage = state.page + 1;
      }

      return {
        ...state,
        page: curPage,
      };
    case "PREV_PAGE":
      let pageNum = state.page;
      if (pageNum <= 0) {
        pageNum = 0;
      } else {
        pageNum = state.page - 1;
      }
      return {
        ...state,
        page: pageNum,
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
