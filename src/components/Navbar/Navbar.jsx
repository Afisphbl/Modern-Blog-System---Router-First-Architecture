import { BookOpen, Plus, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="container navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <BookOpen size={24} />
          Modern Blog System
        </Link>

        <div className="navbar-links">
          <NavLink
            to="/posts"
            className={`navbar-link ${({ isActive }) => (isActive ? "active" : "")}`}
          >
            Posts
          </NavLink>
          <NavLink
            to="/authors"
            className={`navbar-link ${({ isActive }) => (isActive ? "active" : "")}`}
          >
            <User size={20} />
            Profile
          </NavLink>
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
