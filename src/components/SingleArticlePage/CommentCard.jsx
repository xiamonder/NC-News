import { formatDate } from "../../utils";
import { useLocation } from "react-router-dom";
import { Votes } from "../Utils/Votes";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";
import { DeleteItem } from "../Utils/DeleteItem";

export const CommentCard = ({ comment }) => {
  const { pathname } = useLocation();
  const { currentUser } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);
  const [err, setErr] = useState(null);

  return isDeleted ? (
    <div className="rounded-lg bg-gray-light p-4 text-center shadow">
      <h3>Comment deleted</h3>
    </div>
  ) : (
    <>
      <div className="relative rounded-lg bg-white p-4 shadow-sm shadow-green transition-shadow duration-200 ease-in-out">
        {comment.author === currentUser.username ? (
          <h4 className="font-semibold">
            {comment.author} (you)
          </h4>
        ) : (
          <h4 className="font-semibold">{comment.author}</h4>
        )}
        <p className="mt-2">{comment.body}</p>
        <p className="mt-2 text-sm text-green">
          Posted: {formatDate(comment.created_at)}
        </p>
        {comment.author === currentUser.username ? null : (
          <div className="mt-2">
            <Votes
              articleId={comment.article_id}
              commentId={comment.comment_id}
            />
          </div>
        )}
        {comment.author === currentUser.username && !comment.tempComment ? (
          <div className="mt-2">
            <DeleteItem
              commentId={comment.comment_id}
              setIsDeleted={setIsDeleted}
              setErr={setErr}
            />
          </div>
        ) : null}
        {err ? <p className="text-red mt-2">{err}</p> : null}
        {pathname === "/account" ? null : (
          <p className="absolute bottom-3 right-3 mt-2 text-sm">
            {comment.result} of {comment.total_results}
          </p>
        )}
      </div>
    </>
  );
};
