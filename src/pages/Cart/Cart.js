import { useAppReducer } from "../../contexts/data/data-context";
import { CartRow } from "../../component/CartRow/CartRow";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { state } = useAppReducer();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <table style={{ width: "100%" }}>
        <thead style={{ color: "white", backgroundColor: "#172567" }}>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th colSpan="2">Availability</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((details) => (
            <CartRow key={details.id} details={details} />
          ))}
        </tbody>
      </table>
      <Link to="/">
        <button
          style={{
            padding: "0.5rem",
            color: "white",
            backgroundColor: "#172567",
          }}
        >
          Go Back To Homepage
        </button>
      </Link>
    </div>
  );
};
