import { formatDate } from "../../utils";
import { Link, useLocation, useParams } from "react-router-dom";
import { Votes } from "../Utils/Votes";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";

export const ArticleCard = ({ article }) => {
  const { currentUser } = useContext(UserContext);
  const { articleId } = useParams();
  const { pathname } = useLocation();

  return !articleId ? (
    <div className="relative overflow-hidden rounded-lg shadow-sm shadow-green hover:shadow-md hover:shadow-green">
      <Link
        to={`/articles/${article.article_id}`}
        className="card-link flex flex-col items-center p-4"
      >
        <Link
          to={`/topics/${article.topic}`}
          className=" absolute left-0 top-0 px-3 py-3 text-green"
        >
          {article.topic}
        </Link>
        <div className="absolute right-0 top-0 px-3 py-3">
          {pathname === "/account" ? null : (
            <p>
              {article.result} of {article.total_results}
            </p>
          )}
        </div>
        <h3 className="my-2 mt-6 line-clamp-2 text-center text-xl font-bold md:min-h-14">
          {article.title}
        </h3>
        <img
          src={article.article_img_url}
          alt="article image"
          className="h-72 w-auto"
        />
        <div className="mb-4 mt-6 flex w-full flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p className="line-clamp-2 ">
            {`${article.author} - `}
            <span className="text-green">{formatDate(article.created_at)}</span>
          </p>
          <p>Comments: {article.comment_count}</p>
          {currentUser.username === article.author ||
          currentUser.username === undefined ? (
            <p className="md:pr-16 xl:pb-2 xl:pt-2">Votes: {article.votes}</p>
          ) : (
            <Votes articleId={article.article_id} />
          )}
        </div>
      </Link>
    </div>
  ) : (
    <Link
      to={`/articles/${article.article_id}`}
      className="flex cursor-pointer flex-col overflow-hidden rounded-md p-4 text-center shadow-sm shadow-green transition duration-200 ease-in-out hover:bg-green-light"
    >
      <div>
        <h4 className="line-clamp-2 text-sm font-bold md:min-h-10">
          {article.title}
        </h4>
        <p className="text-sm">
          Comments: {article.comment_count} / Votes: {article.votes}
        </p>
      </div>
    </Link>
  );
};
