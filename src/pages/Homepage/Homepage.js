import { Countdown } from "../../component/Countdown/Countdown";
import { CartIconWithBadge } from "../../component/CartIconWithBadge/CartIconWithBadge";
import { useAppReducer } from "../../contexts/data/data-context";
import { Table } from "../../component/Table/Table";
import { Link } from "react-router-dom";

export const Homepage = () => {
  const {
    state: { seatsLeft },
  } = useAppReducer();
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
          <Countdown />
          <h1 style={{ margin: 0, color: "#e66f36" }}>
            Claim your free Trial Class
          </h1>
        </div>
        <Link to="/cart">
          <CartIconWithBadge />
        </Link>
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
};
