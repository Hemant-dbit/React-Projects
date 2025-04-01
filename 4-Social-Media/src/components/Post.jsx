const reactions = [
  { type: "like", label: "👍 Like", class: "btn-outline-primary", badgeClass: "bg-primary" },
  { type: "love", label: "❤️ Love", class: "btn-outline-danger", badgeClass: "bg-danger" },
  { type: "haha", label: "😂 Haha", class: "btn-outline-warning", badgeClass: "bg-warning" }
];

const Post = ({ post }) => {
  return (
    <div class="card post-card" style={{ width: "25rem" }}>
      <div class="card-body ">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.body}</p>
        {reactions.map((reaction) => (
        <button key={reaction.type} className={`btn ${reaction.class} reactions-btn`}>
          {reaction.label} <span className={`badge ${reaction.badgeClass}`}>{post.reactions[reaction.type]}</span>
        </button>
      ))}
        <br/> 
        {post.tags.map((tag) => (
          <span key={tag} class="badge bg-primary me-1">
            {tag}
          </span>
        ))}<br></br>
        
      </div>
    </div>
  );
};

export default Post;
