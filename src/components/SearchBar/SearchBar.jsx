import React from "react";
import "./SearchBar.css";
import { Search } from "lucide-react";
import { Form, useSearchParams } from "react-router-dom";

function SearchBar() {
  const [searchParams] = useSearchParams();
  const currentSearch = searchParams.get("q") || "";
  const currentCategory = searchParams.get("category");

  return (
    <Form method="get" className="search-bar">
      {currentCategory && (
        <input type="hidden" name="category" value={currentCategory} />
      )}
      <Search size={24} className="search-icon" />
      <input
        className="search-input"
        type="search"
        name="q"
        id="searchPost"
        placeholder="Search posts..."
        defaultValue={currentSearch}
      />
    </Form>
  );
}

export default SearchBar;
