import { useEffect, useState } from "react";
import {
  getArticleById,
  getCommentsByArticleId,
  patchArticle,
  patchComment,
} from "../../articles_api_utils";

export const Votes = ({ articleId, commentId }) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (commentId) {
      getCommentsByArticleId(articleId).then(({ comments }) => {
        comments.forEach((comment) => {
          if (comment.comment_id === commentId) {
            setVotes(comment.votes);
          }
        });
      });
    } else {
      getArticleById(articleId).then(({ article }) => {
        setVotes(article.votes);
      });
    }
  }, []);

  const handleClick = (num) => {
    setVotes((currvotes) => currvotes + num);
    if (commentId) {
      patchComment(commentId, num).catch((err) => {
        setVotes((currVotes) => currVotes - num);
        setErr("Something went wrong, please try again.");
      });
    } else {
      patchArticle(articleId, num).catch((err) => {
        setVotes((currvotes) => currvotes + num);
        setErr("Something went wrong, please try again.");
      });
    }
  };

  return (
    <>
      <button
        onClick={() => {
          handleClick(-1);
        }}
      >
        -1
      </button>
      <p>votes: {votes}</p>
      {err ? <p>{err}</p> : null}
      <button
        onClick={() => {
          handleClick(1);
        }}
      >
        +1
      </button>
    </>
  );
};
