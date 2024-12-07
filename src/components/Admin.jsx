import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

function Admin() {
    const [originalData, setOriginalData] = useState(null); // Original data store karega
    const [isData, setIsData] = useState(null); // Filtered data manage karega
    const [error, setError] = useState(null);  // Error ke liye state


    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(null); // Error reset karna
                const response = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
                console.log(response.data);
                setIsData(response.data); // Data set karna
                setOriginalData(response.data); // Original data ko set karein
                setIsData(response.data); // Filtered data ko bhi initialize karein

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
  <Table  data={isData} setIsData={setIsData} originalData={originalData}/>
 
  </div>; 
}

export default Admin;
