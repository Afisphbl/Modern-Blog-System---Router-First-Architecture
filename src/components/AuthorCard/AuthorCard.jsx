import React from "react";
import "./AuthorCard.css";
import { User } from "lucide-react";
import { useLoaderData } from "react-router-dom";

function AuthorCard({ author }) {
  return (
    <div className="author-card">
      <div className="author-card-avatar">
        <User size={48} />
      </div>
      <div className="author-card-info">
        <h1 className="author-card-name">{author.name}</h1>
        <p className="author-card-bio">{author.bio}</p>
      </div>
    </div>
  );
}

export default AuthorCard;
