const { default: axios } = require("axios");

const url = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const getShowPageData = async () => {
  let showDate = await axios.get(`${url}showdates?api_key=${apiKey}`);

  return showDate;
};

module.exports = getShowPageData;
