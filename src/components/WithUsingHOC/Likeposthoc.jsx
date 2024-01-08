import React from "react";
import ParentHOC from "./ParentHOC";

const LikePost = ({ likeHandle, likeCount }) => {
  return (
    <div>
      <button onClick={likeHandle}>Like Post {likeCount}</button>
    </div>
  );
};

export default ParentHOC(LikePost);