import React from "react";
import "./CategoryFilter.css";
import { Funnel } from "lucide-react";
import { Form, useNavigation, useSearchParams } from "react-router-dom";

function CategoryFilter() {
  const [searchParams] = useSearchParams();
  const { state } = useNavigation();
  const selectedCategory = (
    searchParams.get("category") || "all"
  ).toLowerCase();
  const searchQuery = (searchParams.get("q") || "").toLowerCase().trim();
  const isNavigating = state === "loading";

  return (
    <div className="category-filter">
      <div className="category-filter-header">
        <Funnel size={24} className="category-filter-icon" />
        <span>Filter by category:</span>
      </div>

      <Form
        method="get"
        className={`category-filter-form ${isNavigating ? "navigating" : ""}`}
      >
        {searchQuery && <input type="hidden" name="q" value={searchQuery} />}
        <button
          type="submit"
          name="category"
          className={`category-btn ${selectedCategory === "all" ? "active" : ""}`}
          value="all"
        >
          All
        </button>
        <button
          type="submit"
          name="category"
          className={`category-btn ${selectedCategory === "react" ? "active" : ""}`}
          value="React"
        >
          React
        </button>
        <button
          type="submit"
          name="category"
          className={`category-btn ${selectedCategory === "javascript" ? "active" : ""}`}
          value="JavaScript"
        >
          JavaScript
        </button>
        <button
          type="submit"
          name="category"
          className={`category-btn ${selectedCategory === "css" ? "active" : ""}`}
          value="CSS"
        >
          CSS
        </button>
        <button
          type="submit"
          name="category"
          className={`category-btn ${selectedCategory === "design" ? "active" : ""}`}
          value="Design"
        >
          Design
        </button>
        <button
          type="submit"
          name="category"
          className={`category-btn ${selectedCategory === "career" ? "active" : ""}`}
          value="Career"
        >
          Career
        </button>
      </Form>
    </div>
  );
}

export default CategoryFilter;
