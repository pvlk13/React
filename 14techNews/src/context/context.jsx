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
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAPI(`${url}query=${state.query}`);
  }, []);
  return (
    <>
      <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
      ;
    </>
  );
};
const useGlobalHook = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalHook };
