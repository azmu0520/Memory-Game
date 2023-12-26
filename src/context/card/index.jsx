import { useReducer, createContext, useContext } from "react";
import { reducer, initialState } from "./reducer";

const CardContext = createContext();

export const useCardContext = () => useContext(CardContext);

const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CardContext.Provider value={[state, dispatch]}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
