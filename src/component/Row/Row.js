import "./Row.css";

export const Row = ({ details }) => {
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
          <button className="primary-btn">Book Now</button>
        )}
      </td>
    </tr>
  );
};
