import { formatDate } from "../../utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { Votes } from "../Utils/Votes";
import { Link } from "react-router-dom";

export const FullArticleCard = ({ article }) => {
  const { currentUser } = useContext(UserContext);

  
  return (
    <div className="relative mb-10 rounded-lg p-4 shadow-sm shadow-green lg:p-8">
      <div className="flex items-start justify-between">
        <h3 className="mb-2 text-2xl font-bold">{article.title}</h3>
        <Link
          to={`/topics/${article.topic}`}
          className=" absolute right-0 top-0 px-3 py-3 text-green"
        >
          {article.topic}
        </Link>
      </div>
      <div>
        <h4 className="text-lg font-semibold">{article.author}</h4>
        <p className="text-green my-5">Posted: {formatDate(article.created_at)}</p>
      </div>
      <img
        src={article.article_img_url}
        alt="article"
        className="my-5 h-auto w:full lg:w-3/4 mx-auto rounded-lg"
      />
      <p className="mb-4 text-base">{article.body}</p>
      <div className="flex flex-col items-center justify-between sm:flex-row">
        {currentUser.username === article.author ||
        currentUser.username === undefined ? (
          <p>Votes: {article.votes}</p>
        ) : (
          <Votes articleId={article.article_id} />
        )}
        <p>
          Comments: {article.comment_count}
        </p>
      </div>
    </div>
  );
};
