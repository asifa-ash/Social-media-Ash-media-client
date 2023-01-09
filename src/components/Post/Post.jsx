import React, { useEffect, useRef, useState } from "react";
import "./Post.css";
import CommentIcon from "../../img/comment.png";
import { format } from "timeago.js";

import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import {
  commentSend,
  getComment,
  likePost,
  reportPost,
  savedPost,
} from "../../api/PostsRequests";
import { useDispatch, useSelector } from "react-redux";
import Delete from "../../img/delete.png";
import Report from "../../img/report.png";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { deletePost } from "../../actions/PostsAction";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Image, useMantineTheme, Center, Modal } from "@mantine/core";
import InputEmoji from "react-input-emoji";
const Post = ({ data, profileUrl }) => {
  console.log(data, "dp...");
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  // const {Comment} = useSelector((state) => state.postReducer.posts?.Comment);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const [saved, setSaved] = useState(true);
  const [comment, setComment] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [commentModalOpened, setCommentModalOpened] = useState(false);

  const theme = useMantineTheme();

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  const handleSend = async (id) => {
    const message = {
      senderId: user.firstname,
      text: newMessage,
    };
    commentSend(message, id);
    setNewMessage("")
  };

  const handleComment = async (id) => {
     let post = await getComment(id)
    // console.log(post,"llllllllll")
    setCommentModalOpened(true);
    // dispatch(getComment(id));
    setComment(post.data.Comment)
  };

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  const handleModal = () => {
    setModalOpened(true);
  };

  const handleDelete = (postId) => {
    console.log(postId, "");
    alert("Do You want Delete This post");
    dispatch(deletePost(postId, user._id));
    setModalOpened(false);
  };

  const handleReport = (postId) => {
    const data = { isReport: true };
    reportPost(postId, user._id, data);
  };

  const handleSave = (postId) => {
    savedPost(postId, user._id);
    setSaved((prev) => !prev);
  };
  // "defaultProfile.png"

  return (
    <div className="Post">
  

      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        title="Type your comments"
        overlayOpacity={0.55}
        overlayBlur={3}
        size="50%"
        opened={commentModalOpened}
        onClose={() => setCommentModalOpened(false)}
      >
        <div className="chat-sender">
          <InputEmoji value={newMessage} onChange={handleChange} />
          <div
            className="send-button button"
            onClick={() => handleSend(data._id)}
          >
            Send
          </div>
        </div>
        {comment?.map((com) => (
          <span className="show-msg">
            <p>
              {com.senderId}:{com.text}
            </p>
          </span>
        ))}
      </Modal>

      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        title="choose your choice"
        overlayOpacity={0.55}
        overlayBlur={3}
        size="30%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <div className="postReact">
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
      </Modal>
      {/* 3 dots.............. */}
      <div className="dot">
        <MoreVertOutlinedIcon onClick={() => handleModal()} />
      </div>
      <div className="dp">
        <img
          src={publicFolder + (profileUrl ? profileUrl : "defaultProfile.png")}
          className="followerImage"
        />
        <div className="dpname" style={{ color: "black", fontWeight: "bold" }}>
          {data.fullname}
        </div>
      </div>
      <span>{format(data.createdAt)}</span>
      

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
        <img
          src={CommentIcon}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleComment(data._id);
          }}
        />

        {/* report img */}
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
        <span className="dese">{data.desc}</span>
      <div className="detail">
        <span>
          <b>{data.name} </b>
        </span>

      </div>
    </div>
  );
};

export default Post;
