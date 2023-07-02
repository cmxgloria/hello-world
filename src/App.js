import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="App">
      <input type="text" value={name} onChange={handleChange} />
      <h1>Hello {name}!</h1>
    </div>
  );
}

export default App;
