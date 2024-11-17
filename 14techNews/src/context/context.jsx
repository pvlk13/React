//context creation
//provider
//useContext hook
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/reducer.jsx";
const url = "http://hn.algolia.com/api/v1/search?";
const initialState = {
  isloading: true,
  hits: [],
  nbPages: 0,
  query: "CSS",
  page: 0,
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const removePost = (id) => {
    dispatch({ type: "REMOVE_STORY", payload: id });
    console.log("remove");
  };
  const searchHandler = (query) => {
    dispatch({ type: "SEARCH_QUERY", payload: query });
  };
  const prevHandler = () => {
    dispatch({ type: "PREV_PAGE" });
  };
  const nextHandler = () => {
    dispatch({ type: "NEXT_PAGE" });
  };
  const fetchAPI = async (url) => {
    dispatch({ type: "GET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAPI(`${url}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <>
      <AppContext.Provider
        value={{
          ...state,
          removePost,
          searchHandler,
          prevHandler,
          nextHandler,
        }}
      >
        {children}
      </AppContext.Provider>
      ;
    </>
  );
};
const useGlobalHook = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalHook };
