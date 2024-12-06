import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons

const SearchBar = ({ data, setIsData }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const searchQuery = query.toLowerCase(); // Ensure query is case-insensitive
    const filtered = data.filter((user) =>
      user.name.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery) ||
      user.role.toLowerCase().includes(searchQuery)
    );
    setIsData(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.searchButton}>
        <FaSearch />
      </button>
    </div>
  );
};

// Styles for the component
const styles = {
  searchBarContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px",
    maxWidth: "400px",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "5px",
  },
  searchButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "5px",
  },
};

export default SearchBar;
