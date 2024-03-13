import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://nc-news-api-ilr4.onrender.com/api/",
});

export const getArticles = (topic, sort_by, order, limit, p) => {
  let query = "";
  if (topic && topic !== "All") {
    query += `&topic=${topic}`;
  }
  if (sort_by) {
    query += `&sort_by=${sort_by}`;
  }
  if (order) {
    query += `&order=${order}`;
  }
  if (limit) {
    query += `&limit=${limit}`;
  }
  if (p) {
    query += `&p=${p}`;
  }
  if (query !== "") {
    query = "?" + query;
  }
  return ncNewsAPI.get(`articles${query}`).then(({ data }) => {
    return data;
  });
};

export const getArticleById = (articleId) => {
  return ncNewsAPI.get(`articles/${articleId}`).then(({ data }) => {
    return data;
  });
};

export const getCommentsByArticleId = (articleId, limit, p) => {
  let query = "";
  if (limit) {
    query += `&limit=${limit}`;
  }
  if (p) {
    query += `&p=${p}`;
  }
  if (query !== "") {
    query = "?" + query;
  }
  return ncNewsAPI
    .get(`articles/${articleId}/comments${query}`)
    .then(({ data }) => {
      return data;
    });
};

export const getTopics = () => {
  return ncNewsAPI.get("topics").then(({ data }) => {
    return data;
  });
};

export const patchComment = (commentId, increment) => {
  return ncNewsAPI.patch(`comments/${commentId}`, { inc_votes: increment });
};

export const patchArticle = (articleId, increment) => {
  return ncNewsAPI.patch(`articles/${articleId}`, { inc_votes: increment });
};
