import { createContext , useReducer} from "react";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
}
const PostListProvider = ({ children }) => {

  const [postList , dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {

  }

  const deletePost = () => {

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