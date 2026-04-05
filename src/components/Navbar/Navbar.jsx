import { BookOpen, Plus, User } from "lucide-react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-brand">
          <BookOpen size={24} />
          Modern Blog System
        </h1>

        <div className="navbar-links">
          <Link to="/posts">Posts</Link>
          <Link to="/authors">
            <User size={20} />
            Profile
          </Link>
          <Link to="/posts/new" className="navbar-btn">
            <Plus size={20} />
            Write
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
