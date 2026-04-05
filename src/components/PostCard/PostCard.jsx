import React from "react";

import "./PostCard.css";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

function PostCard({
  id,
  author,
  authorId,
  category,
  content,
  date,
  image,
  title,
}) {
  return (
    <div className="post-card">
      <Link to={`/posts/${id}`} className="post-card-image-link">
        <img src={image} alt={title} className="post-card-image" />
      </Link>

      <div className="post-card-content">
        <div className="post-card-category-wrapper">
          <h3 className="post-card-category">{category}</h3>
        </div>

        <Link to={`/posts/${id}`} className="post-card-title">
          {title}
        </Link>
        <p className="post-card-excerpt">{content}</p>

        <div className="post-card-meta">
          <p className="post-card-author">
            <User size={16} />
            <Link to={`/authors/${authorId}`} className="post-card-author-name">
              {author}
            </Link>
          </p>

          <p className="post-card-date">
            <Calendar size={16} />
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
