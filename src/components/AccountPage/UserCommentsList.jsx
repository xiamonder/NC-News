import { CommentCard } from "../SingleArticlePage/CommentCard";

export const UserCommentsList = ({ commentsList }) => {
  return (
    <div className="article-list-wrapper">
      <ul className="article-list">
        {commentsList.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </div>
  );
};
