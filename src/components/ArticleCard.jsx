import { formatDate } from "../utils";
import { Link, useLocation } from "react-router-dom";

export const ArticleCard = ({ article}) => {
  const { pathname } = useLocation();

  return (
    <Link to={`/articles/${article.article_id}`} className="article-card-link">
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
            {article.result} of {article.total_results}
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
