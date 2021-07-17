import "./Table.css";
import { useAppReducer } from "../../contexts/data/data-context";
import { Row } from "../Row/Row";
export const Table = () => {
  const {
    state: { classDetails },
    dispatch,
  } = useAppReducer();
  console.log("hi");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form className="form">
        <table style={{ width: "100%" }}>
          <thead style={{ color: "white", backgroundColor: "#172567" }}>
            <tr>
              <th>Subject</th>
              <th>Date</th>
              <th>Time</th>
              <th colspan="2">Availability</th>
            </tr>
          </thead>
          <tbody>
            {classDetails.length !== 0 &&
              classDetails.map((details) => <Row details={details} />)}
          </tbody>
        </table>
      </form>
    </div>
  );
};
