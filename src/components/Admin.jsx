import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../Testing";

function Admin() {
    const [isData, setIsData] = useState([]);
    const [error, setError] = useState(null);  // Error ke liye state

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(null); // Error reset karna
                const response = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
                console.log(response.data);
                setIsData(response.data); // Data set karna
            } catch (error) {
                setError(`Error: ${error.response ? error.response.status : 'Unknown'} - ${error.message}`); // Error message set karna
                console.error(error); // Log error for debugging
            }
        };

        fetchData(); // Function call karna
    }, []);

    if (error) {
     return <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}> Error: {error}</p>
    }

  return <div> 
  <Table  data={isData} />
 
  </div>; 
}

export default Admin;
