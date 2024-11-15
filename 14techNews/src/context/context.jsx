//context creation
//provider
//useContext hook
import React, { useContext } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return (
    <>
      <AppContext.Provider value={"Vijaya Technologies"}>
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
