import axios from "axios";

export const getWeather = async (city) => {
  if (!city || city === "") {
    city = "New York";
  }
  const result = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=06f7a18ca30f253be33848f84ebdae06`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  return result;
};

export default getWeather;
