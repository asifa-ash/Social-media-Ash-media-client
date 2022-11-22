import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { createChat } from "../../../../server/controllers/ChatController";
import { followUser, unfollowUser } from "../../actions/UserAction";
import {createChat} from '../../api/ChatRequests'

import msg from '../../../src/img/msg.jpg'
import { Link } from "react-router-dom";
const User = ({ person }) => {
  console.log(person,"doguuuu")
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch()
  
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };

const handleChat =(id)=>{
 const data={senderId:user._id,receiverId:id}
 createChat(data)
}



  return (
    <div className="follower">
      <div>
        <img
          src={
            publicFolder + person.profilePicture
              ? publicFolder + person.profilePicture
              : publicFolder + "defaultProfile.png"
          }
          alt="profile"
          className="followerImage"
        />
        <div className="name">
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button
        className={
          following ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
      <Link to="/chat" style={{textDecoration: 'none',color:"black"}}>
      <img
            src={msg}
            style={{ width: "25px", height: "25px" }}
            alt=""
            onClick={()=>handleChat(person._id)}
          />
          </Link>
      {/* <button className="button " >chat</button> */}
    </div>
  );
};

export default User;
