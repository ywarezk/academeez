import './App.css';
import { useState } from 'react';
import Child from './Child';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <Child calc1={10} />
    </div>
  );
}

export default App;
