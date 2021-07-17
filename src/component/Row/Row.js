import "./Row.css";
import { useAppReducer } from "../../contexts/data/data-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Row = ({ details }) => {
  const { state, dispatch } = useAppReducer();

  const presentInCart = () => state.cart.find((item) => item.id === details.id);

  const addToCart = (id) => {
    if (state.cart.length < 3) {
      dispatch({ type: "ADD_TO_CART", payload: id });
    } else {
      toast.warning("You can only book maximum 3 classes per week", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const CartButton = () => {
    if (details.seatsLeft === 0) {
      return (
        <button className="btn" disabled style={{ color: "#e66f36" }}>
          Seats Full
        </button>
      );
    } else if (!!presentInCart()) {
      return (
        <button className="btn" disabled style={{ color: "#e66f36" }}>
          Booked
        </button>
      );
    }
    return (
      <button className="btn primary-btn" onClick={() => addToCart(details.id)}>
        Book Now
      </button>
    );
  };

  return (
    <tr key={details.id}>
      <td>{details.subject}</td>
      <td>{details.date}</td>
      <td>{details.time}</td>
      <td>{details.seatsLeft} Seats Left</td>
      <td>
        <CartButton />
      </td>
      <ToastContainer />
    </tr>
  );
};
