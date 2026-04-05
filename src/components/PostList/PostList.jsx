import React from "react";
import PostCard from "../PostCard/PostCard";

import "./PostList.css";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();
  return (
    <div className="post-list-grid">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}

export default PostList;
