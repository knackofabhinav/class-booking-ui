import "./Table.css";
import { useAppReducer } from "../../contexts/data/data-context";
import { Row } from "../Row/Row";

export const Table = () => {
  const {
    state: { classDetails },
  } = useAppReducer();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <table style={{ width: "90%" }}>
        <thead style={{ color: "white", backgroundColor: "#172567" }}>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th colSpan="2">Availability</th>
          </tr>
        </thead>
        <tbody>
          {classDetails.length !== 0 ? (
            classDetails.map((details) => (
              <Row key={details.id} details={details} />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};
