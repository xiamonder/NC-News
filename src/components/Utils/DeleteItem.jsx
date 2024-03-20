import { useState } from "react";
import { deleteComment } from "../../articles_api_utils";
import { Button } from "../Styling/Button";

export const DeleteItem = ({ articleId, commentId, setIsDeleted, setErr }) => {
  const handleClick = () => {
    setIsDeleted(true);
    if (commentId) {
      deleteComment(commentId).catch((err) => {
        setIsDeleted(false);
        setErr("Something went wrong, please try again.");
      });
    }
  };
  return (
    <Button
      label="Delete"
      onClick={() => {
        handleClick();
      }}
    />
  );
};
