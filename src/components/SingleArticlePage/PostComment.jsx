import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { postComment } from "../../articles_api_utils";
import { useParams } from "react-router-dom";
export const PostComment = ({ commentsList, setCommentsList }) => {
  const [comment, setComment] = useState({
    username: "",
    body: "",
  });
  const { currentUser } = useContext(UserContext);
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const { articleId } = useParams();
  const [err, setErr] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (currentUser.username !== undefined) {
      setUserLoggedIn(true);
      setComment((currComment) => ({
        ...currComment,
        username: currentUser.username,
      }));
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser.username === undefined) {
      setUserLoggedIn(false);
    } else {
      setIsSubmitting(true);
      const copy = { ...comment };
      copy.author = comment.username;
      copy.result = 1;
      copy.total_results = commentsList[0].total_results;
      copy.comment_id = Date.now();
      copy.created_at = Date.now();
      copy.userComment = true;
      copy.tempComment = true;
      setCommentsList([copy, ...commentsList]);
      postComment(articleId, comment)
        .then((response) => {
          const postedComment = response.comment;
          setCommentsList((currCommentsList) => {
            postedComment.result = 1;
            postedComment.total_results =
              Number(commentsList[0].total_results) + 1;
            const filteredComments = currCommentsList.filter(
              (currComment) => !currComment.tempComment
            );
            filteredComments.forEach((comment) => {
              comment.result = Number(comment.result) + 1;
              comment.total_results = Number(comment.total_results) + 1;
            });
            const copy = [postedComment, ...filteredComments];

            return copy;
          });
          setComment({ ...comment, body: "" });
          setIsSubmitting(false);
        })
        .catch((err) => {
          setCommentsList(commentsList.slice(1));
          setErr("Something went wrong, please try again.");
          setIsSubmitting(false);
        });
    }
  };

  return (
    <>
      <form id="comment-form" onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="90"
          maxLength="300"
          required
          name="body"
          placeholder="Leave a comment?"
          value={comment.body}
          onChange={(e) =>
            setComment((currComment) => ({
              ...currComment,
              body: e.target.value,
            }))
          }
        />
        {userLoggedIn ? (
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <p>Posting...</p> : <p>Post Comment</p>}
          </button>
        ) : (
          <p>Please log in to leave a comment</p>
        )}
      </form>
      {err ? <p>{err}</p> : null}
    </>
  );
};
