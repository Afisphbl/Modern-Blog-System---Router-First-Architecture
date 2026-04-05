import { ArrowRight, BookOpen } from "lucide-react";

import "./Home.css";
import { Link } from "react-router-dom";
import PostList from "../../components/PostList/PostList";
import { getPosts } from "../../api/postsApi";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <BookOpen size={24} />
            Router-First Architecture
          </div>

          <h1 className="hero-title">
            Welcome to <span className="text-primary">ModernBlog</span>
          </h1>

          <p className="hero-subtitle">
            A premium responsive blog built with React Router v6 Data APIs.
            Discover the latest updates in web development, design, and
            technology.
          </p>

          <div className="hero-actions">
            <Link to="/posts" className="hero-cta">
              Start Reading <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="featured-section">
        <div className="featured-header">
          <h2 className="section-title">Featured Posts</h2>

          <Link to="/posts" className="view-all-link">
            View all <ArrowRight size={16} className="arrow-icon" />
          </Link>
        </div>

        <PostList />
      </div>
    </div>
  );
}

export async function loader() {
  const data = await getPosts();
  return data;
}

export default Home;
