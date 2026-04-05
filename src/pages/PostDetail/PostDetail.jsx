import React, { useState } from "react";
import "./PostDetails.css";
import { Link, redirect, useLoaderData, useSubmit } from "react-router-dom";
import { ArrowLeft, Calendar, SquarePen, Trash, User } from "lucide-react";
import { deletePost, getPostById } from "../../api/postsApi";
import ConfirmDialog from "../../components/ConfirDialog/ConfirmDialog";

function PostDetail() {
  const post = useLoaderData();
  const submit = useSubmit();
  const [isConfirm, setIsConfirm] = useState(false);

  function handleDelete() {
    setIsConfirm((prev) => !prev);
  }

  function onClose() {
    setIsConfirm((prev) => !prev);
  }

  function onConfirmDelete() {
    submit(null, { method: "delete" });
  }

  return (
    <div className="post-details-container">
      {isConfirm && (
        <ConfirmDialog
          isOpen={isConfirm}
          onClose={onClose}
          onConfirm={onConfirmDelete}
          title="Delete Post"
          message="Are you sure you want to delete this post? This action cannot be undone."
        />
      )}
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
            <Link to={`/posts/${post.id}/edit`} className="action-edit">
              <SquarePen size={16} />
              Edit
            </Link>
            <button className="action-delete" onClick={handleDelete}>
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

export async function action({ params }) {
  const { postId } = params;

  await deletePost(postId);

  return redirect("/posts");
}

export default PostDetail;
