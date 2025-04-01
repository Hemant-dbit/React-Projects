import { createContext , useReducer} from "react";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  const updatedPostList = [...currPostList];
  if (action.type === "ADD_POST") {
    return [...currPostList, action.payload];
  }else if (action.type === "DELETE_POST") {
    const updatedPostList = currPostList.filter((post) => post.id !== action.payload);
    return updatedPostList;
  }
  return currPostList;
}
const PostListProvider = ({ children }) => {

  const [postList , dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {

  }

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: postId });
  }

  return(
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  )
}

const DEFAULT_POST_LIST = [
  {
    id : "1",
    title : "My First Post",
    body : "This is my first post",
    userId : "1",
    reactions : {
      like : 0,
      love : 0,
      haha : 0,
    },
    tags : ["first", "post"],
  },
  {
    id : "2",
    title : "My second Post",
    body : "This is my second post",
    userId : "2",
    reactions : {
      like : 3,
      love : 0,
      angry : 0,
      sad : 3,
      haha : 0,
    },
    tags : ["enjoy", "moment"],
  }
]

export default PostListProvider;