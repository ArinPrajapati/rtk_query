import { useSelector } from "react-redux";

import React from "react";
import { selectPost } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
const PostList = () => {
  const post = useSelector(selectPost);

  if (post) console.log(post);
  const orderedPost = post.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderPost = (post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.slice(0, 100) + "..."}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userid} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButton post={post} />
      </article>
    );
  };

  return (
    <section>
      <h2>Post</h2>
      {orderedPost.map(renderPost)}
    </section>
  );
};

export default PostList;
