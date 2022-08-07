import { createContext, useReducer } from "react";

export const CaloryContext = createContext();

export const caloryReducer = (state, action) => {
  switch (action.type) {
    case "SET_CALORY":
      return {
        calory: action.payload,
      };
    //To keep the local state in sync with the database.
    case "CREATE_CALORY":
      return {
        calory: [action.payload, ...state.calory],
        //action.payload is the newly created calory, ...state.calory are the previous calory
      };
    case "DELETE_CALORY":
      return {
        calory: state.calory.filter((c) => c._id !== action.payload._id),
        //The above action filters through all the calory and displays the calory.ids except that of the deleted id determined
        //from workoutform.js
      };
    default:
      return state;
  }
};

//Providing context to the Application Component Tree
export const CaloryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(caloryReducer, {
    calory: null,
  });

  return (
    <CaloryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CaloryContext.Provider>
  );
};
