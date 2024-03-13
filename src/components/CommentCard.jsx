import { formatDate } from "../utils";
import { Link, useLocation } from "react-router-dom";
import { Votes } from "./Votes";

export const CommentCard = ({ comment }) => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="comment-card">
        <h4>{comment.author}</h4>
        <p>{comment.body}</p>
        <p>Posted: {formatDate(comment.created_at)}</p>
        <Votes articleId = {comment.article_id} commentId = {comment.comment_id}/>
        <p>
          {comment.result} of {comment.total_results}
        </p>
      </div>
    </>
  );
};
