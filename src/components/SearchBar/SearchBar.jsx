import React from "react";
import "./SearchBar.css";
import { Search } from "lucide-react";
import { Form } from "react-router-dom";

function SearchBar() {
  return (
    <Form method="get" className="search-bar">
      <Search size={24} className="search-icon" />
      <input
        className="search-input"
        type="search"
        name="searchPost"
        id="searchPost"
        placeholder="Search posts..."
      />
    </Form>
  );
}

export default SearchBar;
