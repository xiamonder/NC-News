import { formatDate } from "../utils";
import { Link, useLocation } from "react-router-dom";
import { Votes } from "./Votes";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export const CommentCard = ({ comment }) => {
  const { pathname } = useLocation();
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="comment-card">
        {comment.author === currentUser.username ? (
          <h4>{comment.author} (you)</h4>
        ) : (
          <h4>{comment.author}</h4>
        )}
        <p>{comment.body}</p>
        <p>Posted: {formatDate(comment.created_at)}</p>
        {comment.author === currentUser.username ? null : (
          <Votes
            articleId={comment.article_id}
            commentId={comment.comment_id}
          />
        )}
        <p>
          {comment.result} of {comment.total_results}
        </p>
      </div>
    </>
  );
};
