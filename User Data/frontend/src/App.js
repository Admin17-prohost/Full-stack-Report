import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    console.log("Button clicked — starting API call");

    setLoading(true);

    try {
      console.log("📡 Sending request to backend...");

      const response = await fetch("http://localhost:5000/users");

      console.log("Response received:", response);

      const data = await response.json();

      console.log("Data from backend:", data);

      setUsers(data);

      console.log(" UI updated with users");
    } catch (error) {
      console.error(" API error:", error);
    }

    setLoading(false);
    console.log("Fetch process completed");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users From Database</h1>

      <button onClick={fetchUsers} disabled={loading}>
        Show Users
      </button>

      {loading && <p>Loading users...</p>}

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.id}</h3>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App;