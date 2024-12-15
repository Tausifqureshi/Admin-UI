import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import Loader from "./Loder";

function Admin() {
    const [originalData, setOriginalData] = useState([]); // Original data store karega
    const [isData, setIsData] = useState([]); // Filtered data manage karega
    const [error, setError] = useState(null);  // Error ke liye state
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(null); // Error reset karna
                await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
                const response = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
                console.log(response.data);
                // setIsData(response.data); // Data set karna
                setOriginalData(response.data); // Original data ko set karein
                setIsData(response.data); // Filtered data ko bhi initialize karein

            } catch (error) {
                setError(`Error: ${error.response ? error.response.status : 'Unknown'} - ${error.message}`); // Error message set karna
                console.error(error); // Log error for debugging
            }finally{
                setLoading(false);
            }
        };

        fetchData(); // Function call karna
    }, []);

    // Loader ko conditionally render karein jab loading true ho
    if (loading) {
        return <Loader />;  // Jab data loading ho raha ho, tab Loader dikhayein
    }

    if (error) {
     return <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}> Error: {error}</p>
    }

  return <div className="App"> 
  <Table  data={isData} setIsData={setIsData} originalData={originalData} setOriginalData={setOriginalData} 
  />
 
  </div>; 
}

export default Admin;
