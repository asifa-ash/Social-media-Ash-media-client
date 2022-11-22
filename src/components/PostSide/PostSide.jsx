import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";

const PostSide = ({isMyPosts}) => {
  return (
    <div className="PostSide">
      <PostShare/>
      <Posts isMyPosts={isMyPosts}/>
    </div>
  );
};

export default PostSide;
