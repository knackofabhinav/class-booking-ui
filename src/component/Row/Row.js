import "./Row.css";
import { useAppReducer } from "../../contexts/data/data-context";

export const Row = ({ details }) => {
  const { state, dispatch } = useAppReducer();
  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  return (
    <tr key={details.id}>
      <td>{details.subject}</td>
      <td>{details.date}</td>
      <td>{details.time}</td>
      <td>{details.seatsLeft} Seats Left</td>
      <td>
        {details.seatsLeft === 0 ? (
          <button disabled>Seats Full</button>
        ) : (
          <button className="primary-btn" onClick={() => addToCart(details.id)}>
            Book Now
          </button>
        )}
      </td>
    </tr>
  );
};
