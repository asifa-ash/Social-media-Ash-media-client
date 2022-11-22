import * as UploadApi from "../api/ChatRequests";




export const createChat = (data) => async (dispatch) => {
  console.log(data,"sussu")
  dispatch({ type: "Chat_START" });
  try {
    const newPost =await UploadApi.uploadPost(data);
   console.log(newPost,"popopooooooo")
    dispatch({ type: "Chat_SUCCESS", data: newPost.data });
    
   
  } catch (error) {
    console.log(error);
    dispatch({ type: "Chat_FAIL" });
  }
};
