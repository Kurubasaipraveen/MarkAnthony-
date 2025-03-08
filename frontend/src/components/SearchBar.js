import React from "react";
import "../styles/SearchBar.css"; // Import the CSS file

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by Recipe Name, Chef, or Description..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
