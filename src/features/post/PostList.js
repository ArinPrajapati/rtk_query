import { useSelector } from "react-redux";

import React from "react";
import { selectPost } from "./postSlice";

const PostList = () => {
  const post = useSelector(selectPost);

  const renderPost = (post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.slice(0, 100) + "..."}</p>
      </article>
    );
  };

  return (
    <section>
      <h2>Post</h2>
      {post.map(renderPost)}
    </section>
  );
};

export default PostList;
