import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
    const [isData, setIsData] = useState(null);
    const [error, setError] = useState(null);  // Error ke liye state

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(null); // Error reset karna
                const response = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
                console.log(response.data);
                setIsData(response.data); // Data set karna
            } catch (error) {
                setError("Data fetch karne me error hua. Please try again."); // Error message set karna
                console.error(err); // Log error for debugging
            }
        };

        fetchData(); // Function call karna
    }, []);

    if (error) {
     return <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
    }

  return <div>
 
  </div>; 
}

export default Admin;
