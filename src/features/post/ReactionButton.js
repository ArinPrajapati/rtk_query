import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reactionAdded } from "./postSlice";

const ReactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};
const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButton = Object.entries(ReactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButton}</div>;
};

export default ReactionButton;
