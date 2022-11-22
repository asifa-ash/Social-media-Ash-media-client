import * as PostsApi from "../api/PostsRequests";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

// export const savedPost = (id,userId) => async (dispatch) => {
//   dispatch({ type: "savePost_START" });
//   try {
//     const { data } = await PostsApi.savedPosts(id,userId);
//     dispatch({ type: "savePost_SUCCESS", data: data });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "savePost_FAIL" });
//   }
// };




export const deletePost = (id,userId) => async (dispatch) => {
  
  dispatch({ type: "delete_START" });
  try {
    const { data } = await PostsApi.deletePost(id,userId);
    console.log(data,"asssssssss")
    dispatch({ type: "delete_SUCCESS", data:data} );
  } catch (error) {
    console.log(error);
    dispatch({ type: "delete_FAIL" });
  }
};

