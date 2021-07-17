import { useAppReducer } from "../../contexts/data/data-context";

export const CartRow = ({ details }) => {
  const { dispatch } = useAppReducer();
  return (
    <tr key={details.id}>
      <td>{details.subject}</td>
      <td>{details.date}</td>
      <td>{details.time}</td>
      <td>{details.seatsLeft} Seats Left</td>
      <td>
        <button
          className="btn primary-btn"
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_CART", payload: details });
          }}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};
