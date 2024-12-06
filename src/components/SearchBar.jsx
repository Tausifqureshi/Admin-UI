import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons

const SearchBar = ({ data, setIsData }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const searchQuery = query.toLowerCase(); // Ensure searchQuery is defined here
      const filtered = data.filter((user) =>
        user.name.toLowerCase().includes(searchQuery) ||
        user.email.toLowerCase().includes(searchQuery) ||
        user.role.toLowerCase().includes(searchQuery)
      );
      setIsData(filtered);
    }
    
    // const searchQuery = e.target.value.toLowerCase();
    // setQuery(searchQuery);
    // const filtered = data.filter((user) =>
    //   user.name.toLowerCase().includes(searchQuery) ||
    //   user.email.toLowerCase().includes(searchQuery) ||
    //   user.role.toLowerCase().includes(searchQuery)
    // );
    // setIsData(filtered);


    // Ya Approach bhi use kar sakte hain.
    // const handleSearch = (e) => {
    //   if (e.key === "Enter") {
    //     const searchQuery = query.toLowerCase(); // Query ko lowercase mein convert kar rahe hain
    //     const filtered = data.filter((user) =>
    //       Object.values(user).some((value) =>
    //         String(value).toLowerCase().includes(searchQuery)
    //       )
    //     );
    //     setIsData(filtered);
    //   }

    
    };
    
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        // onChange={handleSearch}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown ={handleSearch}
        className="search-input"
      />

       <button onClick={handleSearch} className="search-icon">
        <FaSearch />
      </button>
    </div>
  );
};



export default SearchBar;
