import { useEffect, useState } from "react";
import { Table } from "./component/Table/Table";
import "./App.css";
import { CartIconWithBadge } from "./component/CartIconWithBadge/CartIconWithBadge";
import { getDataFromServer } from "./services/api";
import { useAppReducer } from "./contexts/cart/cart-context";

function App() {
  const [timeLeft, setTimeLeft] = useState(
    Math.floor(Math.random() * (60 - 30 + 1)) + 30
  );
  const {
    state: { seatsLeft },
    dispatch,
  } = useAppReducer();

  useEffect(() => {
    (async () => {
      const response = await getDataFromServer();
      dispatch({ type: "INITIAL_DATA_FROM_SERVER", payload: response.data });
    })();
  }, [dispatch]);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setTimeLeft((timeLeft) => timeLeft - 1),
      1000
    );
    if (timeLeft === 0) {
      clearTimeout(timeoutId);
    }
  }, [timeLeft]);

  return (
    <div>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5 style={{ margin: 0 }}>Time Left: {timeLeft} seconds</h5>
          <h1 style={{ margin: 0, color: "#e66f36" }}>
            Claim your free Trial Class
          </h1>
        </div>
        <CartIconWithBadge />
      </div>
      <div
        style={{
          padding: "0rem 2rem",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Class Schedule</h2>

        <h2>
          Free Seats Available:{" "}
          <span style={{ color: "#e66f36" }}>{seatsLeft}</span>
        </h2>
      </div>
      <Table />
    </div>
  );
}

export default App;
