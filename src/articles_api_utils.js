import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://nc-news-api-ilr4.onrender.com/api/",
});

export const getArticles = (topic, sort_by, order, limit, p) => {
  const parameters = { params: { topic, sort_by, order, limit, p } };
  if (topic === "All") {
    delete parameters.params.topic;
  }
  return ncNewsAPI.get("articles", parameters).then(({ data }) => {
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

export const postComment = (articleId, comment) => {
  return ncNewsAPI
    .post(`articles/${articleId}/comments`, comment)
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (commentId) => {
  return ncNewsAPI.delete(`comments/${commentId}`);
};

export const postTopic = (topic) => {
  return ncNewsAPI.post(`topics`, topic).then(({ data }) => {
    return data;
  });
};

export const getUsers = () => {
  return ncNewsAPI.get("users").then(({ data }) => {
    return data;
  });
};

export const getComments = () => {
  return ncNewsAPI
    .get("comments")
    .then(({ data }) => {
      return data;
    });
};
