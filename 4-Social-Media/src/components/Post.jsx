import React, { useContext } from "react";
import { PostList } from "../store/post-list-store";


const reactions = [
  {
    type: "like",
    label: "👍 Like",
    className: "btn-outline-primary",
    badgeClass: "bg-primary",
  },
  {
    type: "love",
    label: "❤️ Love",
    className: "btn-outline-danger",
    badgeClass: "bg-danger",
  },
  {
    type: "haha",
    label: "😂 Haha",
    className: "btn-outline-warning",
    badgeClass: "bg-warning",
  },
];

const Post = ({ post }) => {
  const { deletePost , updateReaction } = useContext(PostList);
  


  return (
    <div className="card post-card" style={{ width: "25rem" }}>
      <div className="card-body ">
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-2 "
          onClick={() => deletePost(post.id)}
          aria-label="Close"
        ></button>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {reactions.map((reaction) => (
          <button
            key={reaction.type}
            className={`btn ${reaction.className} reactions-btn`}
            onClick={() => updateReaction(post.id, reaction.type)}
          >
            {reaction.label}{" "}
            <span className={`badge ${reaction.badgeClass}`}>
              {post.reactions[reaction.type]}
            </span>
          </button>
        ))}
        <br />
        {post.tags.map((tag) => (
          <span key={tag} className="badge bg-primary me-1">
            {tag}
          </span>
        ))}
        <br></br>
      </div>
    </div>
  );
};

export default Post;
