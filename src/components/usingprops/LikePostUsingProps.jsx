import React from "react";
import ParentProps from "./ParentProps";

export default function LikePost() {
  return (
    <ParentProps>
      {({ like, handleLike }) => {
        return (
          <button onClick={handleLike}>Like Post {like}</button>
        );
      }}
    </ParentProps>
  );
}