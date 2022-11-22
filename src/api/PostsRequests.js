import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`);
export const likePost = (id, userId) =>
  API.put(`posts/${id}/like`, { userId: userId });

export const deletePost = (id,userId) =>
API.delete(`pos/${id}/${userId}`);

export const deleteRPost = (id,userId) =>
API.get(`rpost/${id}/${userId}`);



export const savedPost= (id,userId) =>API.post(`/posts/${id}/${userId}`);



export const getAllPost = () => API.get(`/post`);
export const  reportPost= (id,userId,data) => API.put(`/postsre/${id}/${userId}`,data);

