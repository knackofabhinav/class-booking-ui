import { useAppReducer } from "../../contexts/data/data-context";

export const CartRow = ({ details }) => {
  const { state, dispatch } = useAppReducer();
  return (
    <tr key={details.id}>
      <td>{details.subject}</td>
      <td>{details.date}</td>
      <td>{details.time}</td>
      <td>{details.seatsLeft} Seats Left</td>
      <td>
        <button
          className="primary-btn"
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_CART", payload: details });
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};
