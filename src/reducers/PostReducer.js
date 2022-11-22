const postReducer = (
  state = { posts: null, loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    // belongs to PostShare.jsx
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    // belongs to Posts.jsx
    case "RETREIVING_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_SUCCESS":
      console.log(action.data, "kakaka");
      return { ...state, posts: action.data, loading: false, error: false };

    case "RETREIVING_FAIL":
      return { ...state, loading: false, error: true };

    // belongs to post delete

    case "delete_SUCCESS":
      return {
        ...state,
        posts: state.posts?.filter((el) => el._id !== action.data.id),
        loading: false,
        error: false,
      };
    // case "savePost_SUCCESS":
    //   return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default postReducer;
