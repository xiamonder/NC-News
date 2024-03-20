import { CommentCard } from "../SingleArticlePage/CommentCard";

export const UserCommentsList = ({ commentsList }) => {
  return (
    <div className="mb-5">
      <ul className=" flex flex-col gap-4">
        {commentsList.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </div>
  );
};
