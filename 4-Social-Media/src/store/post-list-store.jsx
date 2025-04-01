import { createContext , useReducer} from "react";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  deletePost: () => {},
  updateReaction: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  let updatedPostList = [...currPostList];
  if (action.type === "ADD_POST") {
    return [...currPostList, action.payload];
  }else if( action.type === "ADD_INIITAL_POSTS") {
    return [...currPostList, ...action.payload];
  }
  else if (action.type === "DELETE_POST") {
     updatedPostList = currPostList.filter((post) => post.id !== action.payload);
    return updatedPostList;
  }else if (action.type === "UPDATE_POST") {
      updatedPostList = action.payload;
    return updatedPostList;
  }
  return currPostList;
}
const PostListProvider = ({ children }) => {

  const [postList , dispatchPostList] = useReducer(postListReducer, []);

  const addPost = ({userId, postTitle, postBody, tags}) => {
    const postId = Math.random().toString(36).substring(2, 9);
    const newPost = {
      id:  postId,
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
  const addInitialPosts = (posts) => {
    dispatchPostList({ type: "ADD_INIITAL_POSTS", payload: posts });
  }
  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: postId });
  }

  const updateReaction = (postId, reactionType) => {
    dispatchPostList({
      type: "UPDATE_POST",
      payload: postList.map((post) =>
        post.id === postId
          ? { 
              ...post, 
              reactions: { 
                ...post.reactions, 
                [reactionType]: (post.reactions[reactionType] || 0) + 1 
              } 
            }
          : post
      ),
    });
  };
  

  return(
    <PostList.Provider value={{ postList, addPost, deletePost , updateReaction , addInitialPosts }}>  
      {children}
    </PostList.Provider>
  )
}



export default PostListProvider;