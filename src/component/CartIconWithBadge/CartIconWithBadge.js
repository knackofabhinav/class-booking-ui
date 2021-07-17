import shoppingCart from "../../assets/icons/shopping-cart.png";
import { useAppReducer } from "../../contexts/data/data-context";

export const CartIconWithBadge = () => {
  const {
    state: { cart },
    dispatch,
  } = useAppReducer();
  return (
    <span style={{ cursor: "pointer", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          backgroundColor: "red",
          width: "1rem",
          height: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          padding: "0.2rem",
          right: "-0.5rem",
          top: "-0.8rem",
          color: "white",
        }}
      >
        {cart.length}
      </span>
      <img style={{ width: "2rem" }} src={shoppingCart} alt="shopping-cart" />
    </span>
  );
};
