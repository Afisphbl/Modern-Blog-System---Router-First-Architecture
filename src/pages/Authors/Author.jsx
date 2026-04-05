import React from "react";
import "./AuthorPage.css";
import AuthorCard from "../../components/AuthorCard/AuthorCard";
import { getAuthors } from "../../api/authorsApi";
import { useLoaderData } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";

function AuthorPage() {
  const author = useLoaderData();
  const postsNumber = author.posts.length;
  return (
    <div className="author-page-container">
      <AuthorCard author={author} />

      <div className="author-page-content">
        <h1 className="author-page-title">
          Article by {author.name}
          {postsNumber === 1 ? "" : ` (${postsNumber})`}
        </h1>

        {author.posts.length > 0 && (
          <div className="post-list-grid">
            {author.posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const { authorId } = params;
  const data = await getAuthors({ authorId });
  return data;
}

export default AuthorPage;
