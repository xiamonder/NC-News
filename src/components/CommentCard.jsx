import { formatDate } from "../utils";
import { Link, useLocation } from "react-router-dom";

export const CommentCard = ({ comment }) => {
  const { pathname } = useLocation();

  return (
<>
          <div className="comment-card">
          <h4>{comment.author}</h4>
          <p>{comment.body}</p>
          <p>Posted: {formatDate(comment.created_at)}</p>
          <p>votes: {comment.votes}</p>
       
          <p>
            {comment.result} of {comment.total_results}
          </p>
        </div>
      </>
  );
};
