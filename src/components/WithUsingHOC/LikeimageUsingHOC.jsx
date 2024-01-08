import React from "react";
import ParentHOC from "./ParentHOC";

const LikeImage = ({ likeHandle, likeCount }) => {
  return (
    <div>
      <button onClick={likeHandle}>Like Image {likeCount}</button>
    </div>
  );
};

export default ParentHOC(LikeImage);