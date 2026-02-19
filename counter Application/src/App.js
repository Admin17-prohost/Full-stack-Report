import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Counters</h1>
        <h2 className="count">{count}</h2>


          <button onClick={() => setCount(count + 1)} className="btn">+</button>

          <button onClick={() => setCount(0)} className="btn">⟳</button>

          <button onClick={() => setCount(count - 1)} className="btn">-</button>
        <div>
          <button onClick={() => setCount(count + 10)} className="btn">+10</button>

          <button onClick={() => setCount(count - 10)} className="btn">-10</button>
      </div>
      </div>
    </div>
  );
}

export default App;
