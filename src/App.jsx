import React, { useState, useEffect } from 'react';


const App = () => {
  const [data, setData] = useState("table");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData('https://jsonplaceholder.typicode.com/users');
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className='mama'>
      {/* Display the retrieved data */}
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>FULL NAME</th>
            <th>EMAIL ADDRESS</th>
            <th>PHONE NUMBER</th>
            <th>STREET</th>

          </tr>
        </thead>
      {data && (
          data.map((item, index) => (
              <tr>
                <td>{index+1}</td>
                <td key={item.id}>{item.name} </td>
                <td>{item.email} </td>
                <td>{item.phone} </td>
                <td>{item.address?.street} </td>
              </tr>
            // <li key={item.id}>{item.name}</li>
            ))
            )}
      </table>
    </div>
  );
};

export default App