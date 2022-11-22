import React, { useEffect, useRef, useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";

import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { likePost, reportPost, savedPost } from "../../api/PostsRequests";
import { useDispatch, useSelector } from "react-redux";
import Delete from "../../img/delete.png";
import Report from "../../img/report.png";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { deletePost } from "../../actions/PostsAction";

const Post = ({ data, profileUrl }) => {
  console.log(data, "dp...");
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const [saved, setSaved] = useState(true);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  const handleDelete = (postId) => {
    console.log(postId, "");
    alert("Do You want Delete This post");
    dispatch(deletePost(postId, user._id));
  };

  const handleReport = (postId) => {
    const data = { isReport: true };
    reportPost(postId, user._id, data);
  };

  const handleSave = (postId) => {
    savedPost(postId, user._id);
    setSaved((prev) => !prev);
  };
  // console.log(persons);
  // "defaultProfile.png"
  return (
    <div className="Post">
      <div className="dp">
        <img
          src={publicFolder + (profileUrl ? profileUrl : "defaultProfile.png")}
          className="followerImage"
        />
        <div className="dpname" style={{ color: "black", fontWeight: "bold" }}>
          {data.fullname}
        </div>
      </div>

      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />

        {user._id === data.userId ? (
          <img
            src={Delete}
            style={{ width: "25px", height: "25px" }}
            alt=""
            onClick={() => handleDelete(data._id)}
          />
        ) : (
          ""
        )}

        {/* report img */}
        {user._id !== data.userId ? (
          <img
            src={Report}
            style={{ width: "25px", height: "25px" }}
            alt=""
            onClick={() => handleReport(data._id)}
          />
        ) : (
          ""
        )}

        {saved ? (
          user._id != data.userId ? (
            <SaveAsIcon onClick={() => handleSave(data._id)} />
          ) : (
            ""
          )
        ) : (
          <TaskAltIcon onClick={() => handleSave(data._id)} />
        )}
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name} </b>
        </span>

        <span className="dese">{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
