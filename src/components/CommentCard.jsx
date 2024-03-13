import { formatDate } from "../utils";
import { useLocation } from "react-router-dom";
import { Votes } from "./Votes";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { DeleteItem } from "./DeleteItem";

export const CommentCard = ({ comment }) => {
  const { pathname } = useLocation();
  const { currentUser } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);
   const [err, setErr] = useState(null);

  return isDeleted ? (
    <div className="comment-card">
      <h3>Comment deleted</h3>
    </div>
  ) : (
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
        {comment.author === currentUser.username && !comment.tempComment ? (
          <DeleteItem
            commentId={comment.comment_id}
            setIsDeleted={setIsDeleted}
            setErr={setErr}
          />
        ) : null}
        {err ? <p>{err}</p> : null}
        <p>
          {comment.result} of {comment.total_results}
        </p>
      </div>
    </>
  );
};
