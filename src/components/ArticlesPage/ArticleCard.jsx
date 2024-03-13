import { formatDate } from "../../utils";
import { Link, useLocation } from "react-router-dom";
import { Votes } from "../Utils/Votes";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";

export const ArticleCard = ({ article }) => {
  const { pathname } = useLocation();
  const { currentUser } = useContext(UserContext);

  return (
    // <Link to={`/articles/${article.article_id}`} className="article-card-link">
    pathname === "/" ? (
      <div className="article-card">
        <Link
          to={`/articles/${article.article_id}`}
          className="article-card-link"
        >
          <>
            <h3>{article.title}</h3>
            <h4>{article.author}</h4>
            <p>{article.topic}</p>
            <p>Posted: {formatDate(article.created_at)}</p>
            <p>comments: {article.comment_count}</p>
            <img src={article.article_img_url} alt="article image" />
          </>
        </Link>
        {article.author === currentUser.username ? null : (
          <Votes articleId={article.article_id} />
        )}
        <p>
          {article.result} of {article.total_results}
        </p>
      </div>
    ) : (
      <Link
        to={`/articles/${article.article_id}`}
        className="article-card-link"
      >
        <div className="sidebar">
          <h4>{article.title}</h4>
          <h5>{article.author}</h5>
        </div>
      </Link>
    )
  );
};
