import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../articles_api_utils";
import { CommentCard } from "./CommentCard";
import { FilterBar } from "./FilterBar";
import { PageNavigator } from "./PageNavigator";
import { Loading } from "./Loading";

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
      setTotalComments(comments[0].total_results);
      setIsLoading(false);
    });
  }, [articleId, limit, p]);

  return (
    <>
      <FilterBar limit={limit} setLimit={setLimit} setP={setP} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="article-list-wrapper">
          <ul className="article-list">
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
