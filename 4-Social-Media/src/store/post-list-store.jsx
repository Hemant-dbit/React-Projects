import { createContext , useReducer} from "react";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  deletePost: () => {},
  updateReaction: () => {},
});

const postListReducer = (currPostList, action) => {
  const updatedPostList = [...currPostList];
  if (action.type === "ADD_POST") {
    return [...currPostList, action.payload];
  }else if (action.type === "DELETE_POST") {
    const updatedPostList = currPostList.filter((post) => post.id !== action.payload);
    return updatedPostList;
  }else if (action.type === "UPDATE_POST") {
    const updatedPostList = action.payload;
    return updatedPostList;
  }
  return currPostList;
}
const PostListProvider = ({ children }) => {

  const [postList , dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = ({userId, postTitle, postBody, tags}) => {
    const postId = Math.random().toString(36).substring(2, 9);
    const newPost = {
      id: postId,
      title: postTitle,
      body: postBody,
      userId: userId,
      reactions: {
        like: 0,
        love: 0,
        haha: 0,
      },
      tags: tags,
    };
    dispatchPostList({ type: "ADD_POST", payload: newPost });

  }

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: postId });
  }

  const updateReaction = (postId, reactionType) => {
    const postIndex = postList.findIndex((post) => post.id === postId);
    const updatedPost = { ...postList[postIndex] };
    updatedPost.reactions[reactionType]++;
    const updatedPostList = [...postList];
    updatedPostList[postIndex] = updatedPost;
    dispatchPostList({ type: "UPDATE_POST", payload: updatedPostList });
  }

  return(
    <PostList.Provider value={{ postList, addPost, deletePost , updateReaction }}>
      {children}
    </PostList.Provider>
  )
}

const DEFAULT_POST_LIST = [
 
]

export default PostListProvider;