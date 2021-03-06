import axios from "axios";

export const getDataFromServer = async () => {
  try {
    const response = await axios.get(
      "https://class-booking.abhinavniranja1.repl.co"
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
