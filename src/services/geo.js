import axios from 'axios';

export const Geo = async city => {
  const result = await axios
    .get(
      `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=8b692c55b5ab4beaac273e1238297be2`,
    )
    .then(response => {
      return response.data.results[0].geometry;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
  return result;
};

export default Geo;
