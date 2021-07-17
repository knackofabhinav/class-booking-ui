import { useEffect } from "react";
import { Homepage } from "./pages/Homepage/Homepage";
import { Cart } from "./pages/Cart/Cart";
import "./App.css";
import { getDataFromServer } from "./services/api";
import { useAppReducer } from "./contexts/data/data-context";
import { Routes, Route } from "react-router";

function App() {
  const { dispatch } = useAppReducer();

  useEffect(() => {
    (async () => {
      const response = await getDataFromServer();
      dispatch({ type: "INITIAL_DATA_FROM_SERVER", payload: response.data });
    })();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
