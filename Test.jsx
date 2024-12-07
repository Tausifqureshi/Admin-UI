// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons

// const SearchBar = ({ data, setIsData }) => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     const searchQuery = query.toLowerCase(); // Ensure query is case-insensitive
//     const filtered = data.filter((user) =>
//       user.name.toLowerCase().includes(searchQuery) ||
//       user.email.toLowerCase().includes(searchQuery) ||
//       user.role.toLowerCase().includes(searchQuery)
//     );
//     setIsData(filtered);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <div style={styles.searchBarContainer}>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={handleKeyDown}
//         style={styles.input}
//       />
//       <button onClick={handleSearch} style={styles.searchButton}>
//         <FaSearch />
//       </button>
//     </div>
//   );
// };











import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons

const SearchBar = ({ data, setIsData }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    // if (e.key === "Enter" || e.type === "click") {
      // const searchQuery = query.toLowerCase(); // Ensure searchQuery is defined here
      // const filtered = data.filter((user) =>
      //   user.name.toLowerCase().includes(searchQuery) ||
      //   user.email.toLowerCase().includes(searchQuery) ||
      //   user.role.toLowerCase().includes(searchQuery)
      // );
      // setIsData(filtered);
    // }


   
    
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (!searchQuery) {
      // If query is empty, reset to original data
      setIsData(data);
      return;
    }
    const filtered = data.filter((user) =>
      user.name.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery) ||
      user.role.toLowerCase().includes(searchQuery)
    );
    setIsData(filtered);
  }


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

    
    // };
    
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        // onChange={(e) => setQuery(e.target.value)}
        onKeyDown ={handleSearch}
        className="search-input"
      />

       <button onClick={ (e)=>{
        console.log("clicked");
         handleSearch(e);
       }} className="search-icon">
        <FaSearch />
      </button>
    </div>
  );
};



export default SearchBar;
