import Post from "./Post";
import { useEffect, useContext, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      })
      .catch((err) => console.log(err));
      
  }, []);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {/* <div className="post-list-container"> */}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
      {/* </div> */}
    </>
  );
};

export default PostList;
