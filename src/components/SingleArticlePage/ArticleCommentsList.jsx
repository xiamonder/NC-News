import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../articles_api_utils";
import { CommentCard } from "./CommentCard";
import { FilterBar } from "../Utils/FilterBar";
import { PageNavigator } from "../Utils/PageNavigator";
import { Loading } from "../Utils/Loading";
import { PostComment } from "./PostComment";
import { NoResults } from "../Utils/NoResults";

export const ArticleCommentsList = ({ articleId }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState("10");
  const [p, setP] = useState("1");
  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(articleId, limit, p).then(({ comments }) => {
      setCommentsList(comments);
      comments[0] === undefined
        ? setTotalComments(0)
        : setTotalComments(comments[0].total_results);
      setIsLoading(false);
    });
  }, [articleId, limit, p]);

  return (
    <>
      <PostComment
        commentsList={commentsList}
        setCommentsList={setCommentsList}
      />
      <FilterBar limit={limit} setLimit={setLimit} setP={setP} />
      {isLoading ? (
        <Loading className="mb-5" />
      ) : commentsList.length === 0 ? (
        <NoResults />
      ) : (
        <div className="mb-5">
          <ul className=" flex flex-col gap-4">
            {commentsList.map((comment) => {
              return <CommentCard comment={comment} key={comment.comment_id} />;
            })}
          </ul>
        </div>
      )}
      <PageNavigator
        limit={limit}
        p={p}
        setP={setP}
        totalResults={totalComments}
      />
    </>
  );
};
