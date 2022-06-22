const { default: axios } = require("axios");

const url = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_API_KEY;

async function getComment() {
  const comment = await axios.get(`${url}comments?api_key=${apiKey}`);

  return comment;
}

const postComment = async (postData) => {
  await axios.post(`${url}comments?api_key=${apiKey}`, postData);
};

const deleteComment = async (id) => {
  await axios.delete(`${url}comments/${id}?api_key=${apiKey}`);
};

const updateCommentLikes = async (id) => {
  await axios.put(`${url}comments/${id}/like?api_key=${apiKey}`);
};

module.exports = {
  getComment,
  postComment,
  deleteComment,
  updateCommentLikes,
};
