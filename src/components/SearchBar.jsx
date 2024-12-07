import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons

const SearchBar = ({ data, setIsData, originalData}) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault()
      const searchQuery = query.toLowerCase(); // Ensure searchQuery is defined here
      
      if (!searchQuery) {
        // Agar query empty ho, toh original data ko reset karein
        setIsData(originalData);
        return;
      }
      const filtered = data.filter((user) =>
        user.name.toLowerCase().includes(searchQuery) ||
        user.email.toLowerCase().includes(searchQuery) ||
        user.role.toLowerCase().includes(searchQuery)
      );
      setIsData(filtered);
    }

    
    };
    
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
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



















// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons

// const SearchBar = ({ data, setIsData, originalData }) => {
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//     const searchQuery = e.target.value.toLowerCase(); // Convert query to lowercase
//     setQuery(searchQuery); // Update query state

//     if (!searchQuery) {
//       // If query is empty, reset to original data
//       setIsData(originalData);
//       return;
//     }

//     // Filter data based on query
//     const filtered = originalData.filter(
//       (user) =>
//         user.name.toLowerCase().includes(searchQuery) ||
//         user.email.toLowerCase().includes(searchQuery) ||
//         user.role.toLowerCase().includes(searchQuery)
//     );

//     setIsData(filtered); // Update filtered data
//   };

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={handleSearch} // Automatically handle search on each key press
//         className="search-input"
//       />
//       <button onClick={() => handleSearch({ target: { value: query } })} className="search-icon">
//         <FaSearch />
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
