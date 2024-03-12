import { useEffect, useState } from "react";
import { getArticleById } from "../articles_api_utils";
import { formatDate } from "../utils";
import { Link, useLocation } from "react-router-dom";


export const ArticleCard = ({
  articleId,
  result,
  totalResults,
  setIsLoading,
}) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getArticleById(articleId).then(({ article }) => {
      setIsLoading(false);
      setArticle(article);
    });
  }, [articleId]);

  const { pathname } = useLocation();

  return (
    <Link to={`/articles/${articleId}`} className="article-card-link">
      {pathname === "/" ? (
        <div className="article-card">
          <h3>{article.title}</h3>
          <h4>{article.author}</h4>
          <p>{article.topic}</p>
          <p>Posted: {formatDate(article.created_at)}</p>
          <p>comments: {article.comment_count}</p>
          <p>votes: {article.votes}</p>
          <img src={article.article_img_url} alt="article image" />
          <p>
            {result} of {totalResults}
          </p>
        </div>
      ) : (
        <div className="sidebar">
          <h4>{article.title}</h4>
          <h5>{article.author}</h5>
        </div>
      )}
    </Link>
  );
};
