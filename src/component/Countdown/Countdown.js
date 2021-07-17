import { useEffect, useState } from "react";

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(
    Math.floor(Math.random() * (60 - 30 + 1)) + 30
  );
  useEffect(() => {
    const intervalId = setInterval(
      () => setTimeLeft((timeLeft) => timeLeft - 1),
      1000
    );
    if (timeLeft === 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timeLeft]);
  return <h5>Time Left:{timeLeft} seconds</h5>;
};
