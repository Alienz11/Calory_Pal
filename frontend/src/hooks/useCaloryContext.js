import { CaloryContext } from "../context/CaloryContext";
import { useContext } from "react";

//Upon calling the hook `useCaloryContext`, the functionalities of `CaloryContext.js` is invoked.
export const useCaloryContext = () => {
  const context = useContext(CaloryContext);

  if (!context) {
    throw Error("useCaloryContext must be used in a WorkoutContextProvider");
  }
  return context;
};
