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
          state.classDetails.find((item) => item.id === action.payload),
        ],
        classDetails: state.classDetails.map((item) =>
          item.id === action.payload
            ? { ...item, seatsLeft: item.seatsLeft - 1 }
            : item
        ),
        seatsLeft: state.seatsLeft - 1,
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
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
