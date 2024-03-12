import { formatDate } from "../utils";

export const FullArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <h3>{article.title}</h3>
      <h4>{article.author}</h4>
      <p>Posted: {formatDate(article.created_at)}</p>
      <p>{article.topic}</p>
      <p>votes: {article.votes}</p>
      <p>comments: {article.comment_count}</p>
      <img src={article.article_img_url} alt="article image" />
      <p>{article.body}</p>
    </div>
  );
};
