import { useState, useEffect } from 'react';

// Custom hook to fetch data from an API
function FetchData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(jsonData => setData(jsonData))
            .catch(error => {
                console.error("Error fetching data:", error);
                setData(null); // Set data to null in case of an error
            });
    }, []); // Empty dependency array to ensure useEffect runs only once on component mount

    return data;
}

export default FetchData;