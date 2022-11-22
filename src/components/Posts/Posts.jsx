import React, { useEffect, useState } from "react";
import { getTimelinePosts } from "../../actions/PostsAction";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
import { useParams } from "react-router-dom";
import { getAllPost } from "../../api/PostsRequests";
import { getAllUser } from "../../api/UserRequests";

const Posts = ({ isMyPosts }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const [allPost, setAllPost] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const [persons, setPersons] = useState([]);

  posts = posts.reverse();

  console.log(posts, "postdatadaaaaaaaaa");
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  useEffect(() => {
    const posts = async () => {
      const { data } = await getAllPost();

      setAllPost(data.reverse());
    };
    posts();
  }, [posts]);

  console.log(allPost);
  if (!posts) return "No Posts";
  console.log(params.id);
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
  console.log(posts);
  return (
    <div className="Posts">
      {!isMyPosts
        ? loading
          ? "Fetching posts...."
          : allPost.map((post, id) => {
              let profileUrl;
              persons.forEach((el) => {
                if (el._id === post.userId) profileUrl = el.profilePicture;
              });
              return <Post data={post} key={id} profileUrl={profileUrl} />;
            })
        : posts.map((post, id) => {
          let profileUrl;
              persons.forEach((el) => {
                if (el._id === post.userId) profileUrl = el.profilePicture;
              });
            return <Post data={post} key={id} profileUrl={profileUrl} />;
          })}
    </div>
  );
};

export default Posts;
