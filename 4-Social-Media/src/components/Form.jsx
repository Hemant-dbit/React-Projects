import {  useRef } from "react";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Form = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef(null);
  const postTitleElement = useRef(null);
  const postBodyElement = useRef(null);
  const tagsElement = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost({userId, postTitle, postBody, tags});
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    tagsElement.current.value = "";
    alert("Post created successfully!");

  }

  return (
    <form className = "create-post-form">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label" >
        User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          placeholder="Enter your user ID"
          ref={userIdElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label" >
         Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          placeholder="How are you feeling today?"
          ref={postTitleElement}
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">
        Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="postTitle"
          placeholder=" Tell us more about it..."
          ref={postBodyElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Tags" className="form-label" >
         Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          placeholder="Enter tags separated by spaces"
          ref={tagsElement}
        />
      </div>


      
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Post
      </button>
    </form>
  );
};

export default Form;
