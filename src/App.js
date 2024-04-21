import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Simple Counter App</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Remove</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
