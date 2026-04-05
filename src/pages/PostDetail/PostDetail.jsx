import React from "react";
import "./PostDetails.css";
import { Link, useLoaderData } from "react-router-dom";
import { ArrowLeft, Calendar, SquarePen, Trash, User } from "lucide-react";
import { getPostById } from "../../api/postsApi";

function PostDetail() {
  const post = useLoaderData();

  return (
    <div className="post-details-container">
      <div className="post-details-back">
        <Link to="/posts" className="back-link">
          <ArrowLeft size={20} className="back-icon" />
          Back to Posts
        </Link>
      </div>

      <div className="post-details-content">
        <div className="post-details-category-wrapper">
          <div className="post-details-category">{post.category}</div>
        </div>

        <h1 className="post-details-title">{post.title}</h1>

        <div className="post-details-meta-bar">
          <div className="post-details-meta">
            <Link to="/authors/1" className="author-link">
              <div className="author-icon-wrapper">
                <User size={16} className="author-icon" />
              </div>
              <span>{post.author}</span>
            </Link>

            <div className="date-info">
              <Calendar size={16} className="date-icon" />
              <span>{post.date}</span>
            </div>
          </div>
          <div className="post-details-actions">
            <button className="action-edit">
              <SquarePen size={16} />
              Edit
            </button>
            <button className="action-delete">
              <Trash size={16} />
              Delete
            </button>
          </div>
        </div>

        <div className="post-details-image-wrapper">
          <img
            className="post-details-image"
            src={post.image}
            alt={post.title}
          />
        </div>

        <div className="post-details-body">
          <p className="post-details-text">{post.content}</p>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const { postId } = params;
  const data = await getPostById(postId);
  return data;
}

export default PostDetail;
