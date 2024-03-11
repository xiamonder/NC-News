import { useEffect, useState } from "react";
import { getArticleById } from "../articles_api_utils";
import { formatDate } from "../utils";

export const ArticleCard = ({ articleId }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(articleId).then(({ article }) => {
      setArticle(article);
    });
  }, []);

  return (
    <div className="article-card">
      <h3>{article.title}</h3>
      <h4>{article.author}</h4>
      <p>{article.topic}</p>
      <p>Posted: {formatDate(article.created_at)}</p>
      <p>comments: {article.comment_count}</p>
      <p>votes: {article.votes}</p>
    </div>
  );
};
