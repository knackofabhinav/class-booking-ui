import { createContext, useContext, useReducer } from "react";
const AppContext = createContext();

const initalAppState = {
  // As we need in between 5 to 15
  seatsLeft: Math.floor(Math.random() * (15 - 5 + 1)) + 5,
  classDetails: [],
  cart: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA_FROM_SERVER": {
      return { ...state, classDetails: action.payload };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [
          ...state.cart,
          state.classDetails.filter((item) => item.id === action.payload.id),
        ],
      };
    }
    default:
      break;
  }
  return state;
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initalAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppReducer = () => {
  return useContext(AppContext);
};
