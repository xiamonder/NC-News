import { useEffect, useState } from "react";
import {
  getArticleById,
  getCommentsByArticleId,
  patchArticle,
  patchComment,
} from "../articles_api_utils";

export const Votes = ({ articleId, commentId }) => {
  const [votes, setVotes] = useState(0);

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
    setVotes(votes + num);
    if (commentId) {
      patchComment(commentId, num);
    } else {
      patchArticle(articleId, num);
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
