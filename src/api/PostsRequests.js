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

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) =>
  API.put(`post/${id}/like`, { userId: userId });

export const deletePost = (id, userId) => API.delete(`post/${id}/${userId}`);

export const deleteRPost = (id, userId) =>
  API.delete(`post/${id}/${userId}/report`);

export const savedPost = (id, userId) => API.post(`/post/${id}/${userId}/save`);

export const getAllPost = () => API.get(`/post`);
export const reportPost = (id, userId, data) =>
  API.put(`/post/${id}/${userId}/report`, data);

export const commentSend = (msg, id) => API.post(`/post/${id}/comment`, msg);
export const getComment = (id) => API.get(`/post/${id}/comments`);
