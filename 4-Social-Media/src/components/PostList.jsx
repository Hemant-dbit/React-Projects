import Post from "./Post";
import { useContext , useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [datafetched , setDataFetched] = useState(false);

  if (!datafetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      })
      .catch((err) => console.log(err));
    setDataFetched(true);
  }


  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage  />
      )}
      <div className="post-list-container">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
